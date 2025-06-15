import genWords from './core.js';

onmessage = function (ev) {
    let errors = [];

    let myWords = genWords(
        ev.data.file,
        ev.data.num_of_words,
        ev.data.paragraph_mode,
        ev.data.debug_mode,
        ev.data.sort_words,
        ev.data.capitalise_words,
        ev.data.remove_duplicates,
        ev.data.force_words,
        ev.data.word_divider,
        (error) => {
            errors.push(error);
        }
    );
    let error_message = errors.join("<br><br>");


    postMessage({ words: myWords, file: ev.data.file, first_message: error_message, second_message: "tbd" });
}

