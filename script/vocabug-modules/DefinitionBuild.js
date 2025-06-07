// import { Fragment } from './rule.js';
// import Word from './word.js';
// import { SoundSystem, createText, invalidItemAndWeight } from './wordgen.js';

import { SoundSystem } from "./SoundSystem.js";

class DefinitionBuild {
    macros = [];
    phClasses = [];

    constructor(file, logger) {
        this.logger = logger;

        this.sound_system = new SoundSystem(logger);

        if (file.trim() === '') {
            throw new Error('The definition-build editor is empty');
        }
        this.file = file.split('\n');
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