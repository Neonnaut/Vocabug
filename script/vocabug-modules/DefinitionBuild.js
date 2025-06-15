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
        this.sanityCheck();
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
                let [myName, field, valid, isCapital, hasDollarSign] = divideString('→', line);

                if ( !valid ) {
                    this.logger.warn(`Malformed transform, (transforms must look like 'old → new') at line ${this.file_line_num + 1}`)
                    continue;
                }

                this.parse_transform(myName, field);
            }
            if (line.startsWith("category-distribution:")) {
                var the_selected = line.split(":")[1].trim().toLowerCase();

                if (the_selected == "flat") {
                    this.sound_system.set_category_distribution(the_selected);
                } else if (the_selected == "gusein-zade") {
                    this.sound_system.set_category_distribution(the_selected);
                } else if (the_selected == "zipfian") {
                    this.sound_system.set_category_distribution(the_selected);
                } else {
                    throw new Error(`Invalid category-distribution option at line ${this.file_line_num + 1}`);
                }

            } else if (line.startsWith("optionals-weight:")) {
                if (is_a_percentage(line.split(":")[1].trim())) {
                    this.sound_system.set_optionals_weight(line.split(":")[1].trim());
                } else {
                    this.logger.warn(`Invalid optionals-weight at line ${this.file_line_num + 1}`);
                }

            } else if (line.startsWith("num-syllables:")) {
                let syllableRange = line.split(":")[1].trim().split("-");
                if (syllableRange.length != 2) {
                    document.getElementById('min-syllable').value = '1'; // Default value
                    document.getElementById('max-syllable').value = '1'; // Default value
                } else if (is_a_percentage(syllableRange[0].trim()) && is_a_percentage(syllableRange[1].trim())) {
                    document.getElementById('min-syllable').value = syllableRange[0].trim();
                    document.getElementById('max-syllable').value = syllableRange[1].trim();
                } else {
                    document.getElementById('min-syllable').value = '1'; // Default value
                    document.getElementById('max-syllable').value = '1'; // Default value
                }

            } else if (line.startsWith("wordshape-distribution:")) {
                var theSelected = '';

                if (line.split(":")[1].trim().toLowerCase() == "flat") {
                    this.sound_system.set_wordshape_distribution("flat");
                } else if (line.split(":")[1].trim().toLowerCase() == "gusein-zade") {
                    this.sound_system.set_wordshape_distribution("gusein-zade");
                } else if (line.split(":")[1].trim().toLowerCase() == "zipfian") {
                    this.sound_system.set_wordshape_distribution("zipfian");
                }

            } else if (line.startsWith("words:")) {
                if (line.split(":")[1].trim() != "") {
                    document.getElementById('word-shapes').value = line.split(":")[1].trim();
                }

            } else if (line.startsWith("alphabet:")) {
                if (line.split(":")[1].trim() != "") {
                    document.getElementById('alphabet').value = line.split(":")[1].trim();
                }

            } else if (line.startsWith("graphemes:")) {
                if (line.split(":")[1].trim() != "") {
                    document.getElementById('graphemes').value = line.split(":")[1].trim();
                }

            } else if (line.startsWith("BEGIN transform:")) {
                transform_mode = true;
            } else if (line.startsWith("END")) {
                transform_mode = false;
            } else {

                // Return word, field, valid, isCapital, hasDollarSign
                let [myName, field, valid, isCapital, hasDollarSign] = divideString('=', line);

                if ( !valid || !isCapital ) {
                    continue;
                }
                if (hasDollarSign) {
                    // SEGMENTS !!!
                } else {
                    // CATEGORIES !!!
                }
            }
        }
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

export default DefinitionBuild;