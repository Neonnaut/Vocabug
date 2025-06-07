import genWords from './core.js';
import Logger from './logger.js';

onmessage = function (ev) {
    let myLogger = new Logger();

    let myWords = genWords(
        ev.data.file,
        ev.data.num_of_words,
        ev.data.mode,
        ev.data.sort_words,
        ev.data.capitalise_words,
        ev.data.remove_duplicates,
        ev.data.force_words,
        ev.data.word_divider,
        myLogger
    );

    postMessage({
        words: myWords,
        file: ev.data.file,
        
        error_message: myLogger.errors.join("<br>"),
        warning_message: myLogger.warnings.join("<br>"),
        info_message: myLogger.infos.join("<br>")
    });
}

