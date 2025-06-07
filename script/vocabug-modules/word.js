import last from './last.js';

class Word {
    static debug = false;
    static capitalise_words = false;

    forms;
    filters;

    constructor(skeleton, baby) {
        this.transformations = [skeleton];
        this.forms = [baby];
        this.rejected = false;
    }
    toString() {
        let output = '';
        if (Word.debug) {
            for (const i in this.forms) {
                output += `${this.transformations[i]} – ${this.forms[i]}\n`;
            }
            return output;
        }
        output = last(this.forms);
        if (Word.capitalise_words){
            output = output.charAt(0).toUpperCase() + output.slice(1);
        }
        return output;
    }
}

export default Word;