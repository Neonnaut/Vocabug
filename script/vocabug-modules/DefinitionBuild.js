// import { Fragment } from './rule.js';
// import Word from './word.js';
// import { SoundSystem, createText, invalidItemAndWeight } from './wordgen.js';

import { SoundSystem } from "./SoundSystem.js";

class DefinitionBuild {
    macros = [];
    phClasses = [];

    file_line_num = 0;
    

    constructor(file, logger) {
        this.logger = logger;

        this.sound_system = new SoundSystem(logger);

        if (file.trim() === '') {
            throw new Error('The definition-build editor is empty');
        }
        this.file_array = file.split('\n');
        this.parse();
        //this.expand_segments();
        // this.sanityCheck();
    }
    parse() {
        let transform_mode = false;

        for (; this.file_line_num < this.file_array.length; ++this.file_line_num) {
            let line = this.file_array[this.file_line_num];

            line = line.replace(/;.*/u, '').trim(); // comments!!

            if (line === '') {
                continue; // Blank lines !!
            }

            if (transform_mode) {
                if (line.startsWith("END")) {
                    transform_mode = false;
                    continue;
                }
                let [myName, field, valid, isCapital, hasDollarSign] = divideString('→', line);

                if ( !valid ) {
                    this.logger.warn(`Malformed transform, (transforms must look like 'old → new') at line ${this.file_line_num + 1}`)
                    continue;
                }

                this.sound_system.add_transform(myName, field);
            }
            if (line.startsWith("category-distribution:")) {
                var the_selected = line.split(":")[1].trim().toLowerCase();

                if (the_selected == "flat" || the_selected == "gusein-zade" || the_selected == "zipfian") {
                    this.sound_system.set_category_distribution(the_selected);
                } else {
                    throw new Error(`Invalid category-distribution option at line ${this.file_line_num + 1}`);
                }
            } else if (line.startsWith("num-syllables:")) {
                let syllableRange = line.split(":")[1].trim().split("-");
                if (syllableRange.length != 2) {
                    this.logger.warn(`No num-syllables value pair found at line ${this.file_line_num + 1}`);
                } else if (is_a_percentage(syllableRange[0].trim()) && is_a_percentage(syllableRange[1].trim())) {
                    this.sound_system.set_min_syllable(syllableRange[0].trim());
                    this.sound_system.set_max_syllable(syllableRange[1].trim());
                } else {
                    this.logger.warn(`Invalid num-syllables, (it should look like 'min - max', min and max must be a number between 1 and 100) at line ${this.file_line_num + 1}`);
                }

            } else if (line.startsWith("wordshape-distribution:")) {
                var the_selected = line.split(":")[1].trim().toLowerCase();

                if (the_selected == "flat" || the_selected == "gusein-zade" || the_selected == "zipfian") {
                    this.sound_system.set_wordshape_distribution(the_selected);
                } else {
                    throw new Error(`Invalid wordshape-distribution option at line ${this.file_line_num + 1}`);
                }

            } else if (line.startsWith("optionals-weight:")) {
                if (is_a_percentage(line.split(":")[1].trim())) {
                    this.sound_system.set_optionals_weight(line.split(":")[1].trim());
                } else {
                    this.logger.warn(`Invalid optionals-weight at line ${this.file_line_num + 1}`);
                }

            } else if (line.startsWith("alphabet:")) {
                if (line.split(":")[1].trim() != "") {
                    this.sound_system.set_alphabet(line.split(":")[1].trim());
                }

            } else if (line.startsWith("words:")) {
                if (line.split(":")[1].trim() != "") {
                    this.sound_system.set_wordshapes(line.split(":")[1].trim());
                }

            } else if (line.startsWith("graphemes:")) {
                if (line.split(":")[1].trim() != "") {
                    this.sound_system.set_graphemes(line.split(":")[1].trim());
                }

            } else if (line.startsWith("BEGIN transform:")) {
                transform_mode = true;

            } else {

                // Return word, field, valid, isCapital, hasDollarSign
                let [myName, field, valid, isCapital, hasDollarSign] = divideString('=', line);

                if ( !valid || !isCapital ) {
                    continue;
                }
                if (hasDollarSign) {
                    // SEGMENTS !!!
                    this.sound_system.add_segment(myName, field);
                } else {
                    // CATEGORIES !!!
                    this.sound_system.add_category(myName, field);
                }
            }
        }

        this.sound_system.expand_segments();

        this.sound_system.expand_categories();

        this.sound_system.get_wordshapes();

        this.logger.silent_info(this.sound_system.shower());
    }

    parse_transform( line ) {
        if (filt === '') {
            
        }
        const filtParts = filt.split('>');
        if (filtParts.length !== 2) {
            throw new Error(`malformed filter '${filt}': filters must look`
                + " like 'old > new'.");
        }
        const pre = filtParts[0].trim();
        const post = filtParts[1].trim();
        this.soundsys.addFilter(pre, post);
    }

    generate_paragraph( num_of_words )
    {
        const word_list = this.sound_system.generate(
            num_of_words, false, false, false, false, false );
        return word_list;
    }

    generate_debugged_list( num_of_words, remove_duplicates, force_words )
    {
        const word_list = this.sound_system.generate(
            num_of_words, true, false, false, remove_duplicates, force_words );

        return word_list;
    }

    generate_word_list( num_of_words, sort_words, capitalise_words, remove_duplicates, force_words )
    {
        const word_list = this.sound_system.generate(
            num_of_words, false, sort_words, capitalise_words, remove_duplicates, force_words );

        return word_list;
    }
}

function validateString(str) {
    const regex = /^[A-Z]$|^\$[A-Z]$/;
    const hasDollarSign = str.includes("$");
    
    return [
        regex.test(str),
        hasDollarSign
    ];
}

function is_a_percentage(str) {
    const num = Number(str);
    return !isNaN(num) && num >= 1 && num <= 100;
}

function divideString(divider, string) {
    if (string == "" || divider == "") {
        return [ null, null, false, false, false ]; // Handle invalid inputs
    }

    let divided = string.split(divider);
    if (divided.length !== 2) {
        return [ null, null, false, false, false ]; // Check if division results in exactly two parts 
    }
    let word = divided[0].trim();
    let field = divided[1].trim();
    if (word == "" || field == "") {
        return [ null, null, false, false, false ]; // Handle empty parts
    }

    let valids = validateString(word);

    return [ word, field, true, valids[0], valids[1] ]; // Return word, field, valid, isCapital, hasDollarSign
}

export default DefinitionBuild;