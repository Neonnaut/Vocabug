import getVocExample from "./vocabug-modules/examples.js";

const w = new Worker("./script/vocabug-modules/worker.js", { type: "module" });

//var OUTPUT_WORDS_FIELD = document.getElementById('voc-output-words-field');
//var FILE_NAME = document.getElementById('file-name');
//var OUTPUT_MESSAGE = document.getElementById('voc-output-message');

function create_file_editor() {
    // Work out content and theme of file editor
    let content = ''; let theme = 'dark'; let filename = '';
    if (localStorage.hasOwnProperty('vocabug-pro')) {
        try {
            let got_local_storage = JSON.parse(localStorage.getItem('vocabug-pro'));
            content = got_local_storage[0]; filename = got_local_storage[1];
        } catch {
            localStorage.removeItem("vocabug-pro");
            content = getVocExample('basic');
        }
    } else {
        content = getVocExample('basic');
    }
    if (localStorage.hasOwnProperty('colourScheme')) {
        if (localStorage.getItem('colourScheme') != 'dark-mode') {
            theme = 'light'
        }
    }

    if (filename) {
        setFilename(filename);
    }

    //Create file editor
    return cm6.createEditorView(
        cm6.createEditorState(content, theme),
        document.getElementById("editor")
    );
}

function clearResults() {
    document.getElementById('voc-output-words-field').innerHTML = "";
    document.getElementById('voc-output-message').innerHTML = "";
}
function setFilename(filename) {
    document.getElementById('file-name').value = filename;
}

$(window).on('load', function () {
    const editor = create_file_editor();

    editor.dispatch({
        selection: { anchor: editor.state.doc.length }
    })

    // Watch for dark / light change in system settings for system theme people
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (!localStorage.hasOwnProperty('colourScheme')) {
            let scheme = event.matches ? "dark" : "light";
            if (scheme == "dark") {
                cm6.changeEditorTheme(editor, "dark");
            } else if (scheme == "light") {
                cm6.changeEditorTheme(editor, "light");
            }
        }
    });

    // Wrap lines checkbox
    document.getElementById("editor-wrap-lines").addEventListener("click", function () {
        if (document.getElementById('editor-wrap-lines').checked) {
            cm6.changeEditorLineWrap(editor, true);
        } else {
            cm6.changeEditorLineWrap(editor, false);
        }
    });

    //Examples buttons
    $("[class='voc-example']").click(function () {
        let choice = $(this).attr('value');
        let text = getVocExample(choice);
        let confirm = window.confirm("Replace editor text with example?");
        if (text != false && confirm != false) {
            editor.dispatch({
                changes: {
                    from: 0,
                    to: editor.state.doc.length,
                    insert: text
                }
            })
        }
        setFilename('');
        clearResults();
    });

    //Clear button
    document.getElementById("voc-clear-editor").addEventListener("click", function () {
        if (window.confirm("Clear EDITOR TEXT and GENERATED WORDS?")) {
            editor.dispatch({
                changes: {
                    from: 0,
                    to: editor.state.doc.length,
                    insert: ''
                }
            })
            setFilename('');
            clearResults();
        }
    });

    //Mode buttons
    $("input[name='mode-type']").click(function () {
        if (document.getElementById('word-list-mode').checked) {
            document.getElementById("sort-words").disabled = false;
            document.getElementById("capitalise-words").disabled = false;
            document.getElementById("remove-duplicates").disabled = false;
            document.getElementById("word-divider").disabled = false;
            document.getElementById("force-words").disabled = false;
        } else if (document.getElementById('debug-mode').checked) {
            document.getElementById("sort-words").disabled = true;
            document.getElementById("capitalise-words").disabled = true;
            document.getElementById("remove-duplicates").disabled = false;
            document.getElementById("word-divider").disabled = true;
            document.getElementById("force-words").disabled = false;
        } else {
            document.getElementById("sort-words").disabled = true;
            document.getElementById("capitalise-words").disabled = true;
            document.getElementById("remove-duplicates").disabled = true;
            document.getElementById("word-divider").disabled = true;
            document.getElementById("force-words").disabled = true;
        }
    });

    // Generate words button
    document.getElementById("generate-words").addEventListener("click", function () {
        this.disabled = true;
        clearResults();
        //alert("This is a test alertab  xxxx!");
        try {
            w.postMessage({
                file: editor.state.doc.toString(),
                num_of_words: document.getElementById('num-of-words').value,
                mode: document.querySelector('input[name="mode-type"]:checked').value,
                sort_words: document.getElementById('sort-words').checked,
                capitalise_words: document.getElementById('capitalise-words').checked,
                remove_duplicates: document.getElementById('remove-duplicates').checked,
                force_words: document.getElementById('force-words').checked,
                word_divider: document.getElementById('word-divider').value
            })
        } catch(e) {
            this.disabled = false;
            alert(e);
        }
    });

    // w.onmessage is triggered via generate words
    w.onmessage = function (e) {
        let output_words_field = document.getElementById('voc-output-words-field');

        // Transfer words to the output
        output_words_field.innerHTML = e.data.words;
        output_words_field.focus();

        let filename = document.getElementById('file-name').value;

        let output_message = document.getElementById('voc-output-message');
        if (e.data.warning_message) {
            output_message.innerHTML += `<p class='warning-message'>${e.data.warning_message}</p>`;
        }
        if (e.data.error_message) {
            output_message.innerHTML += `<p class='error-message'>${e.data.error_message}</p>`;
        }
        if (e.data.info_message) {
            output_message.innerHTML += `<p class='info-message'>${e.data.info_message}</p>`;
        }

        // Store file contents in localstorage to be retrieved on page refresh.
        localStorage.setItem('vocabug-pro', JSON.stringify([e.data.file, filename]));

        document.getElementById("generate-words").disabled = false;
    }

    //Load file button
    document.getElementById("load-file").addEventListener("click", function () {
        let input = document.createElement('input');

        input.type = 'file';
        input.onchange = _this => {
            let file = Array.from(input.files)[0], read = new FileReader();
            read.readAsText(file);
            read.onloadend = function () {
                file = read.result;

                let filename = Array.from(input.files)[0].name.replace(/\.[^/.]+$/, "");
                setFilename(filename);

                editor.dispatch({
                    changes: {
                        from: 0,
                        to: editor.state.doc.length,
                        insert: file
                    }
                })
                localStorage.setItem('vocabug-pro', JSON.stringify([file, filename]));
            }
        };
        input.click();
    });

    // Save file button
    document.getElementById("save-file").addEventListener("click", function () {
        let link = document.createElement("a");
        let file = editor.state.doc.toString();
        let file_boy = new Blob([file], { type: 'text/plain' });
        link.href = URL.createObjectURL(file_boy);


        let filename = document.getElementById("file-name").value;
        let ext_filename = filename;

        if (filename == '') { ext_filename = 'vocabug.txt'; } else { ext_filename = ext_filename + ".txt"; }

        link.download = ext_filename;
        link.click();
        URL.revokeObjectURL(link.href);
        // Save input text in user's localstorage for next session
        localStorage.setItem('vocabug-pro', JSON.stringify([file, filename]));
    });

    //Copy results button
    document.getElementById("output-words-copy").addEventListener("click", function () {
        let output_words_field = document.getElementById("voc-output-words-field");

        if (output_words_field.value != "") {

            // Select text for depreciated way, and aesthetics.
            output_words_field.select();
            output_words_field.setSelectionRange(0, 99999); /*For mobile devices*/
            output_words_field.focus();

            if (!navigator.clipboard) {
                document.execCommand("copy"); // Depreciated way
            } else {
                navigator.clipboard.writeText(output_words_field.value);
            }
        }
    });

    $(".ipa-button").click(function () {
        editor.dispatch({
            changes: {
                from: editor.state.selection.main.head,
                insert: $(this).attr("value"),
            },

            selection: { anchor: editor.state.selection.main.head + 1 },
            scrollIntoView: true,

        })
    });

    // Show keyboard
    document.getElementById("show-keyboard").addEventListener("click", function () {
        if (document.getElementById('show-keyboard').checked) {
            document.getElementById("voc-keyboard-table").style.display = "block";
        } else {
            document.getElementById("voc-keyboard-table").style.display = "none";
        }
    });


});