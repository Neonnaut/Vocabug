import Word from './word.js';
import replaceSegments from './picking_things/oi.js';

class SoundSystem {
    filters = [];
    phonemeset = {};
    constructor(logger) {
        this.logger = logger;

        this.category_distribution = 'flat'; // flat, gusein-zade, zipfian
        this.categories = new Map(); // name -> field
        this.optionals_weight = 20; // 0% - 100%
        this.min_syllable = 1;
        this.max_syllable = 1;
        this.segments = new Map(); // name -> field
        this.wordshape_distribution = 'flat'; // flat, gusein-zade, zipfian
        this.alphabet = [];
        this.wordshapes = '';
        this.graphemes = [];
        this.transforms = new Map(); // target -> post
    }

    shower() {
        console.table(this.categories);
        console.table(this.segments);
        console.table(this.transforms);
        return `~ DEFINITION ~\ncategory_distribution: ${this.category_distribution}\n`+
            `min_syllable: ${this.min_syllable}\n`+
            `max_syllable: ${this.max_syllable}\n`+
            `wordshape_distribution: ${this.wordshape_distribution}\n`+
            `optionals_weight: ${this.optionals_weight}\n`+
            `alphabet: ${this.alphabet}\n`+
            `wordshapes: ${this.wordshapes}\n`+
            `graphemes: ${this.graphemes}\n`
    }

    set_category_distribution(category_distribution) {
        this.category_distribution = category_distribution;
    }
    set_min_syllable(min_syllable) {
        this.min_syllable = min_syllable;
    }
    set_max_syllable(max_syllable) {
        this.max_syllable = max_syllable;
    }
    set_wordshape_distribution(wordshape_distribution) {
        this.wordshape_distribution = wordshape_distribution;
    }
    set_optionals_weight(optionals_weight) {
        this.optionals_weight = optionals_weight;
    }
    set_alphabet(alphabet) {
        this.alphabet = alphabet;
    }
    set_wordshapes(wordshapes) {
        this.wordshapes = wordshapes;
    }
    set_graphemes(graphemes) {
        this.graphemes = graphemes;
    }
    add_transform(target, post) {
        this.transforms.set(target, post);
    }
    add_category(name, field) {
        this.categories.set(name, field);
    }
    add_segment(name, field) {
        this.segments.set(name, field);
    }


    expand_categories() {
        for (const [key, value] of this.categories) {
            this.categories.set(key, replaceSegments(value, this.categories));
        }
    }


    expand_segments() {
        for (const [key, value] of this.segments) {
            this.segments.set(key, replaceSegments(value, this.segments));
        }
        this.wordshapes = replaceSegments(this.wordshapes, this.segments);
    }

    generate(num_of_words, debug, sort_words, capitalise_words, remove_duplicates, force_words) {
        this.logger.silent_info(
            `~ OPTIONS ~\n` +
            `Num of words:      ` + num_of_words + `    Debug: ` + debug +
            `\nRemove duplicates: ` + remove_duplicates +
            `\nForce words:       ` + force_words +
            `\nSort words:        ` + sort_words +
            `\nCapitalise words:  ` + capitalise_words
        );
        
        Word.debug = debug;
        Word.capitalise_words = capitalise_words;
        
        /*
         * Neonnaut: Increase a tally of rejected words and non unique words.
         * Reset unique words when we get a unique word. End the loop when the tally is
         * five times greater than the amount of words requested. Except when
         * force_words is set to true
        */
        let num_of_rejects = 0;
        let num_of_duplicates = 0;
        let num_of_bad_eggs = 0

        let upper_gen_limit = num_of_words * 5
        if (upper_gen_limit > 1000000) {
            upper_gen_limit = 1000000;
        }

        /*
         * End the loop if it takes over 30 seconds to complete.
        */
        let start = Date.now();

        const words = new Array();

        for (let i = 0; i < 4_294_967_295; ++i) {
            if (words.length === num_of_words) {
                break;
            }
            if ( (num_of_bad_eggs > 9000) && (Date.now() - start >= 30000) ) {
                this.logger.warn('Vocabug timed out after 30 seconds because it could not generate enough words in time')
                break;
            } else if ((num_of_bad_eggs >= upper_gen_limit) && !force_words) {
                this.logger.warn('Could not generate the requested amount of words')
                break
            }

            //const skeleton = ruleSelector.select();  //I(V)CV(C)
            //const baby = skeleton.generate();  //taNtadoRman
            const word = new Word('IV?CVC?', 'taNtadoRman');

            // Add the word
            if (word.rejected) {
                num_of_bad_eggs ++;
                num_of_rejects ++;
            } else if (remove_duplicates) {
                if (words.includes(word.toString())) {
                    // We got a duplicate word. we don't like that
                    num_of_bad_eggs ++;
                    num_of_duplicates ++;
                } else {
                    // We got a unique word. We like that
                    words.push(word.toString());
                }
            } else {
                // We got a word. We like that
                words.push(word.toString());
            }
        }

        if (sort_words) {
            words.sort((Intl.Collator().compare));
        }

        // Send some good info about the generation results
        if (words.length == 1) {
            this.logger.info(`1 word generated in ${Date.now() - start} ms`);
        } else if (words.length > 1) {
            this.logger.info(`${words.length} words generated in ${Date.now() - start} ms`);
        }

        if (num_of_duplicates == 1) {
            this.logger.info(`1 duplicate words removed`);
        } else if (num_of_duplicates > 1) {
            this.logger.info(`${num_of_duplicates} duplicate words removed`);
        }

        if (num_of_rejects == 1) {
            this.logger.info(`1 word was rejected`)
        } else if (num_of_rejects > 1) {
            this.logger.info(`${num_of_rejects} words were rejected`)
        }
        
        return words;
    }


}

export { SoundSystem };
