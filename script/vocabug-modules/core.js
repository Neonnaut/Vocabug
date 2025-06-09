//import PhonologyDefinition from './PhonologyDefinition.js';
//import { ClusterEngine, Segment, Place, Manner } from './SmartClusters.js';
//import ArbSorter from './ArbSorter.js';

import DefinitionBuild from './DefinitionBuild.js';


// Original  -- returns a string
const genWords = (() => {
    const vocabug = (
        file,
        num_of_words = 100,

        mode = 'word-list',
        sort_words = true,
        capitalise_words = false,
        remove_duplicates = true,
        force_words = false,
        word_divider = " ",
        logger
    ) => {

        // number of words
        if (num_of_words == '') {
            num_of_words = 100;
        }
        if (isNaN(num_of_words)) {
            logger.warn(`"${num_of_words}" is not a number, generating 100 words instead`);
            num_of_words = 100;
        }
        num_of_words = parseFloat(num_of_words);
        if (!num_of_words) {
            logger.warn(`"${num_of_words}" is not a number, generating 100 words instead`);
            num_of_words = 100;
        }
        if (num_of_words <= 0) {
            logger.warn(`Cannot generate "${num_of_words}" words, generating 100 words instead`);
            num_of_words = 100;
        }
        if (num_of_words > 1000000) {
            logger.warn(`Cannot generate more than 1,000,000 words, generating 1,000,000 words instead`);
            num_of_words = 1000000;
        }
        if (num_of_words !== Math.round(num_of_words)) {
            logger.warn(`Cannot generate "${num_of_words}" words, ` +
            `generating ${Math.round(num_of_words)} words instead`);
            num_of_words = Math.round(num_of_words);
        }
        
        let output = '';
        try {
            // Yo! This is where we genereate da words !!!!
            // Wow. Such words.

            const myDefinitionBuild = new DefinitionBuild(file, logger);

            // Mode and word divider
            if (mode == 'paragraph') {
                const my_word_list = myDefinitionBuild.generate_paragraph(
                    num_of_words
                );
                output = inject_punctuation(my_word_list)

            } else if (mode == 'debug') {

                const my_word_list = myDefinitionBuild.generate_debugged_list(
                    num_of_words,
                    remove_duplicates,
                    force_words
                );
                output = my_word_list.join('\n');

            } else {
                const my_word_list = myDefinitionBuild.generate_word_list(
                    num_of_words,
                    sort_words,
                    capitalise_words,
                    remove_duplicates,
                    force_words
                );

                if (word_divider == '') {
                    word_divider = ' ';
                } else {
                    word_divider = word_divider.replace(new RegExp('\\\\n', 'g'), '\n');
                }
                output = my_word_list.join(word_divider);
            }
            
            logger.silent_info(
                `Num of words:      ` + num_of_words + `    Mode: ` + mode +
                `\nRemove duplicates: ` + remove_duplicates +
                `\nForce words:       ` + force_words +
                `\nSort words:        ` + sort_words +
                `\nCapitalise words:  ` + capitalise_words +
                `\nWord divider:     "` + word_divider + `"`
            );

        }
        catch (e) { logger.error(e); }
        return output;
    };

    //vocabug.ClusterEngine = ClusterEngine;
    //vocabug.Segment = Segment;
    //vocabug.Place = Place;
    //vocabug.Manner = Manner;
    //vocabug.__ArbSorter = ArbSorter;
    return vocabug;
})();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function inject_punctuation(word_list) {
    let text = '';
    let wordsUntilPunct = getRandomInt(1, 3) + getRandomInt(0, 3);
    let sentenceLength = 0;

    for (let i = 0; i < word_list.length; i++) {
        text += sentenceLength === 0 
            ? word_list[i].charAt(0).toUpperCase() + word_list[i].slice(1)
            : word_list[i];

        wordsUntilPunct--; sentenceLength++;

        if (wordsUntilPunct === 0 || i === word_list.length - 1) {
            let punctRando = Math.random();
            let myPunct = punctRando <= 0.1 ? '?' 
                : punctRando <= 0.6 && sentenceLength < 4 && i < word_list.length - 1 ? ',' 
                : '.';
            text += myPunct;
            sentenceLength = myPunct === '.' || myPunct === '?' ? 0 : sentenceLength;
            wordsUntilPunct = getRandomInt(1, 3) + getRandomInt(0, 3);
        }
        text += ' ';
    }
    return text;
}

export default genWords;