//import getVocExample from "./vocabug-modules/examples.js";

const w = new Worker("./script/vocabug-modules/worker.js", { type: "module" });

//var OUTPUT_WORDS_FIELD = document.getElementById('voc-output-words-field');
//var FILE_NAME = document.getElementById('file-name');
//var OUTPUT_MESSAGE = document.getElementById('voc-output-message');

function getNextAvailableLetter(letters) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // Full alphabet
  const usedLetters = new Set(letters); // Convert list to a Set for fast lookup

  for (let letter of alphabet) {
    if (!usedLetters.has(letter)) {
      return letter; // Return the first unused letter
    }
  }

  return null; // Return null if all letters are used
}


function make_file(){
    // category_distribution
    const category_distribution = document.getElementById('category-distribution').value;

    // category containers
    const categoryContainer = document.getElementById("category-container");
    let categories = '';
    categoryContainer.querySelectorAll(".flex.items-center").forEach((item) => {
        const categoryName = item.querySelector("select[name='category-name']");
        const categoryField = item.querySelector("input[name='category-field']");
        
        if (categoryName.value != '' && categoryField.value) {
            categories += categoryName.value + ' = ' + categoryField.value + '\n';
        }
    });

    // syllable length
    const min_syllables = document.getElementById('min-syllable').value;

    // syllable length
    const max_syllables = document.getElementById('max-syllable').value;

    // segments containers
    const segmentContainer = document.getElementById("segment-container");
    let segments = '';
    segmentContainer.querySelectorAll(".flex.items-center").forEach((item) => {
        const segmentName = item.querySelector("select[name='segment-name']");
        const segmentField = item.querySelector("input[name='segment-field']");
        
        if (segmentName.value != '' && segmentField.value != '') {
            segments += segmentName.value + ' = ' + segmentField.value + '\n';
        }
    });
    
    // wordshape_distribution
    const wordshape_distribution = document.getElementById('word-shape-distribution').value;

    // wordshapes
    const optionals_weight = document.getElementById('optionals-weight').value;

    //alphabet
    const alphabet = document.getElementById('alphabet').value;

    // wordshapes
    const wordshapes = document.getElementById('word-shapes').value;

    // graphemes
    const graphemes = document.getElementById('graphemes').value;
    
    // transforms containers
    const transformContainer = document.getElementById("transform-container");
    let transforms = '';
    transformContainer.querySelectorAll(".flex.items-center").forEach((item) => {
        const transformTarget = item.querySelector("input[name='transform-target']");
        const transformAfter = item.querySelector("input[name='transform-after']");
        
        if (transformTarget.value != '' && transformAfter.value != '' ) {
            transforms += transformTarget.value + ' → ' + transformAfter.value + '\n';
        }
    });

    let file = "";
    if (category_distribution != ''){
        file += `category-distribution: ${category_distribution}\n`;
    }
    if (categories.trim() != '') {
        file += categories.trim() + '\n';
    }
    if (min_syllables != '' && max_syllables != '') {
        file += `num-syllables: ${min_syllables} - ${max_syllables}\n`;
    }
    if (segments.trim() != '') {
        file += segments.trim() + '\n';
    }
    if (wordshape_distribution != '') {
        file += `wordshape-distribution: ${wordshape_distribution}\n`;
    }
    if (optionals_weight != '') {
        file += `optionals-weight: ${optionals_weight}\n`;
    }
    if (alphabet != '') {
        file += `alphabet: ${alphabet}\n`;
    }
    if (wordshapes != '') {
        file += `words: ${wordshapes}\n`;
    }
    if (graphemes != '') {
        file += `graphemes: ${graphemes}\n`;
    }
    if (transforms.trim() != '') {
        file += `BEGIN transform:\n${transforms.trim()}\nEND\n`;
    }

    return file
}

function file_to_interface(file) {
    let myArray = file.split("\n");
    let transform_mode = false;
    let has_dollar_s = false;

    const category_container = document.getElementById("category-container"); // Target div element
    category_container.innerHTML = ''; // Clear existing categories

    const segment_container = document.getElementById("segment-container"); // Target div element
    segment_container.innerHTML = ''; // Clear existing segments

    const transform_container = document.getElementById("transform-container"); // Target div element
    transform_container.innerHTML = ''; // Clear existing transforms

    for (let i = 0; i < myArray.length; i++) {
        let line = myArray[i].trim();
        line = line.replace(/;.*/u, '').trim(); // comments!!
        if (line === '') {
            continue;
        }

        if (transform_mode) {
            // Handle transform lines

            // Return word, field, valid, isCapital, hasDollarSign
            let [myName, field, valid, isCapital, hasDollarSign] = divideString('→', line);

            if ( !valid ) {

            } else {

                // Create main wrapper div
                const wrapperDiv = document.createElement("div");
                wrapperDiv.className = "flex flex-col gap-2";

                // Create inner div
                const innerDiv = document.createElement("div");
                innerDiv.className = "flex items-center gap-2";

                // Create name input field
                const targetElement = document.createElement("input");
                targetElement.type = "text";
                targetElement.className = "w-full monospace";
                targetElement.name = "transform-target"
                targetElement.value = myName;

                // Create name input field
                const my_arrow = document.createElement("a");
                my_arrow.innerHTML = "→";

                // Create after input field
                const afterElement = document.createElement("input");
                afterElement.type = "text";
                afterElement.className = "w-full monospace";
                afterElement.name = "transform-after"
                afterElement.value = field;

                // Create delete button
                const buttonElement = document.createElement("button");
                buttonElement.className = "voca-delete";
                buttonElement.innerHTML = '<i class="fa fa-trash"></i>';

                // Append all elements
                innerDiv.appendChild(targetElement);
                innerDiv.appendChild(my_arrow);
                innerDiv.appendChild(afterElement);
                innerDiv.appendChild(buttonElement);
                wrapperDiv.appendChild(innerDiv);
                transform_container.appendChild(wrapperDiv);
            }

        } else {
            if (line.startsWith("category-distribution:")) {
                var theSelected = '';

                if (line.split(":")[1].trim().toLowerCase() == "flat") {
                    theSelected = "flat";
                } else if (line.split(":")[1].trim().toLowerCase() == "gusein-zade") {
                    theSelected = "gusein-zade";
                } else if (line.split(":")[1].trim().toLowerCase() == "zipfian") {
                    theSelected = "zipfian";
                } else {
                    theSelected = "flat";
                }
                const options = document.getElementById('category-distribution').options;
                for (let option of options) {
                    if (theSelected == option.value) {
                        option.selected = true;
                    }
                }

            } else if (line.startsWith("optionals-weight:")) {
                if (is_a_percentage(line.split(":")[1].trim())) {
                    document.getElementById('optionals-weight').value = line.split(":")[1].trim();
                } else {
                    document.getElementById('optionals-weight').value = '10'; // Default value
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
                    theSelected = "flat";
                } else if (line.split(":")[1].trim().toLowerCase() == "gusein-zade") {
                    theSelected = "gusein-zade";
                } else if (line.split(":")[1].trim().toLowerCase() == "zipfian") {
                    theSelected = "zipfian";
                } else {
                    theSelected = "flat";
                }
                const options = document.getElementById('word-shape-distribution').options;
                for (let option of options) {
                    if (theSelected == option.value) {
                        option.selected = true;
                    }
                }

            } else if (line.startsWith("alphabet:")) {
                if (line.split(":")[1].trim() != "") {
                    document.getElementById('alphabet').value = line.split(":")[1].trim();
                }
            } else if (line.startsWith("words:")) {
                if (line.split(":")[1].trim() != "") {
                    document.getElementById('word-shapes').value = line.split(":")[1].trim();
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

                } else if (hasDollarSign) {

                    if (!has_dollar_s) {
                        if ('$S' != myName) {
                            i --;
                            has_dollar_s = true;
                            myName = '$S';
                            field = '';
                        } else if('$S' == myName) {
                            has_dollar_s = true;
                        }
                    }


                    // Create main wrapper div
                    const wrapperDiv = document.createElement("div");
                    wrapperDiv.className = "flex flex-col gap-2";

                    // Create inner div
                    const innerDiv = document.createElement("div");
                    innerDiv.className = "flex items-center gap-2";

                    // Create select element
                    const selectElement = document.createElement("select");
                    selectElement.name = "segment-name";
                    for (let i = 65; i <= 90; i++) {
                        if (myName === '$'+String.fromCharCode(i)) {
                            const optionA = document.createElement("option");
                            optionA.selected = true;
                            optionA.value = myName; // Changed from "A" to "C"
                            optionA.textContent = myName;
                            selectElement.appendChild(optionA);
                        } else {
                            const optionA = document.createElement("option");
                            optionA.value = myName; // Changed from "A" to "C"
                            optionA.textContent = myName;
                            selectElement.appendChild(optionA);
                        }
                    }
                    if (myName == '$S') {
                        selectElement.disabled = true;
                    }

                    // Create input field
                    const inputElement = document.createElement("input");
                    inputElement.type = "text";
                    inputElement.className = "w-full monospace";
                    inputElement.name = "segment-field"
                    inputElement.value = field;

                    // Create delete button
                    const buttonElement = document.createElement("button");
                    buttonElement.className = "voca-delete";
                    buttonElement.innerHTML = '<i class="fa fa-trash"></i>';

                    // Append all elements
                    innerDiv.appendChild(selectElement);
                    innerDiv.appendChild(inputElement);
                    innerDiv.appendChild(buttonElement);
                    wrapperDiv.appendChild(innerDiv);
                    segment_container.appendChild(wrapperDiv);

                } else {
                    // CATEGORIES !!!

                    // Create main wrapper div
                    const wrapperDiv = document.createElement("div");
                    wrapperDiv.className = "flex flex-col gap-2";

                    // Create inner div
                    const innerDiv = document.createElement("div");
                    innerDiv.className = "flex items-center gap-2";

                    // Create select element
                    const selectElement = document.createElement("select");
                    selectElement.name = "category-name";
                    for (let i = 65; i <= 90; i++) {
                        if (myName === String.fromCharCode(i)) {
                            const optionA = document.createElement("option");
                            optionA.selected = true;
                            optionA.value = String.fromCharCode(i); // Changed from "A" to "C"
                            optionA.textContent = String.fromCharCode(i);
                            selectElement.appendChild(optionA);
                        } else {
                            const optionA = document.createElement("option");
                            optionA.value = String.fromCharCode(i); // Changed from "A" to "C"
                            optionA.textContent = String.fromCharCode(i);
                            selectElement.appendChild(optionA);
                        }
                    }

                    // Create input field
                    const inputElement = document.createElement("input");
                    inputElement.type = "text";
                    inputElement.className = "w-full monospace";
                    inputElement.name = "category-field"
                    inputElement.value = field;

                    // Create delete button
                    const buttonElement = document.createElement("button");
                    buttonElement.className = "voca-delete";
                    buttonElement.innerHTML = '<i class="fa fa-trash"></i>';

                    // Append all elements
                    innerDiv.appendChild(selectElement);
                    innerDiv.appendChild(inputElement);
                    innerDiv.appendChild(buttonElement);
                    wrapperDiv.appendChild(innerDiv);
                    category_container.appendChild(wrapperDiv);
                }
            }
        }
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


function clearFields() {
    document.getElementById("category-distribution").selectedIndex = 0;

    document.getElementById('category-container').innerHTML =
          `<div class="flex flex-col gap-2">

            <div class="flex items-center gap-2">
              <select name="category-name">
                <option value="A">A</option><option value="B">B</option><option value="C" selected="selected">C</option>
                <option value="D">D</option><option value="E">E</option><option value="F">F</option>
                <option value="G">G</option><option value="H">H</option><option value="I">I</option>
                <option value="J">J</option><option value="K">K</option><option value="L">L</option>
                <option value="M">M</option><option value="N">N</option><option value="O">O</option>
                <option value="P">P</option><option value="Q">Q</option><option value="R">R</option>
                <option value="S">S</option><option value="T">T</option><option value="U">U</option>
                <option value="V">V</option><option value="W">W</option><option value="X">X</option>
                <option value="Y">Y</option><option value="Z">Z</option>
              </select>
              <input type="text" name="category-field" class="w-full monospace">

              <button class="voca-delete"><i class="fa fa-trash"></i></button>
            </div>
          </div>`;

    document.getElementById('min-syllable').value = 1;
    document.getElementById('max-syllable').value = 1;

    document.getElementById('segment-container').innerHTML =
        `<div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <select name="segment-name" disabled="">
                <option value="$S">$S</option>
              </select>
              <input name="segment-field" type="text" class="w-full monospace">

              <button disabled class="voca-delete"><i class="fa fa-trash"></i></button>
            </div>
          </div>`;

    document.getElementById("word-shape-distribution").selectedIndex = 0;

    document.getElementById('word-shapes').value = "";

    document.getElementById('optionals-weight').value = '10';

    document.getElementById('alphabet').value = "";

    document.getElementById('graphemes').value = "";

    document.getElementById('voc-output-message').innerHTML = "";

    document.getElementById('transform-container').innerHTML =``
}

function clearResults() {
    document.getElementById('voc-output-message').innerHTML = "";
    document.getElementById('voc-output-words-field').innerHTML = "";
}


function setFilename(filename) {
    document.getElementById('file-name').value = filename;
}

$(window).on('load', function () {
    if (localStorage.hasOwnProperty('vocabug-lite')) {
        try {
            let got_local_storage = JSON.parse(localStorage.getItem('vocabug-lite'));

            file_to_interface(got_local_storage[0]);
            setFilename(got_local_storage[1]);
        } catch {
            localStorage.removeItem("vocabug-lite");
            content = getVocExample('basic');
        }
    }

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

    //Clear button
    document.getElementById("voc-clear-editor").addEventListener("click", function () {
        if (window.confirm("Clear ALL FIELDS and GENERATED WORDS?")) {

            setFilename('');
            clearFields();
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



    $(document).on("click", ".voca-delete", function () {

            const currentDiv = $(this).closest("div"); // Find the closest parent div
    const parentDiv = currentDiv.parent(); // Get the next parent div

    currentDiv.remove(); // Remove the current div
    parentDiv.remove(); // Remove the parent div

    });

        
    

   

    //Add category button
    document.getElementById("voc-add-category").addEventListener("click", function () {
        const container = document.getElementById("category-container"); // Target div element

        //Get next available letter
        const selectElements = container.querySelectorAll("select");

        const selectedValues = Array.from(selectElements).map(select => select.value);

       const myOption = getNextAvailableLetter(selectedValues); // Output: 'C'

        // Create main wrapper div
        const wrapperDiv = document.createElement("div");
        wrapperDiv.className = "flex flex-col gap-2";

        // Create inner div
        const innerDiv = document.createElement("div");
        innerDiv.className = "flex items-center gap-2";

        // Create select element
        const selectElement = document.createElement("select");
        selectElement.name = "category-name";
        


        for (let i = 65; i <= 90; i++) {
            if (myOption === String.fromCharCode(i)) {
                const optionA = document.createElement("option");
                optionA.selected = true;
                optionA.value = String.fromCharCode(i); // Changed from "A" to "C"
                optionA.textContent = String.fromCharCode(i);
                selectElement.appendChild(optionA);
            } else {
                const optionA = document.createElement("option");
                optionA.value = String.fromCharCode(i); // Changed from "A" to "C"
                optionA.textContent = String.fromCharCode(i);
                selectElement.appendChild(optionA);
            }
        }

        

        // Create input field
        const inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.className = "w-full monospace";
        inputElement.name = "category-field"

        // Create delete button
        const buttonElement = document.createElement("button");
        buttonElement.className = "voca-delete";
        buttonElement.innerHTML = '<i class="fa fa-trash"></i>';

        // Append all elements
        innerDiv.appendChild(selectElement);
        innerDiv.appendChild(inputElement);
        innerDiv.appendChild(buttonElement);
        wrapperDiv.appendChild(innerDiv);
        container.appendChild(wrapperDiv);

    });




    //Add segments button
    document.getElementById("voc-add-segment").addEventListener("click", function () {
        const container = document.getElementById("segment-container"); // Target div element

        //Get next available letter
        const selectElements = container.querySelectorAll("select");

  let selectedValues = Array.from(selectElements).map(select => select.value);
    selectedValues = selectedValues.map(str => str.substring(1));

  //console.log(selectedValues); // Outputs an array of selected option values


       const myOption = getNextAvailableLetter(selectedValues); // Output: 'C'

        // Create main wrapper div
        const wrapperDiv = document.createElement("div");
        wrapperDiv.className = "flex flex-col gap-2";

        // Create inner div
        const innerDiv = document.createElement("div");
        innerDiv.className = "flex items-center gap-2";

        // Create select element
        const selectElement = document.createElement("select");
        selectElement.name = "segment-name"
        


        for (let i = 65; i <= 90; i++) {
            if (myOption === String.fromCharCode(i)) {
                const optionA = document.createElement("option");
                optionA.selected = true;
                optionA.value = "$"+ String.fromCharCode(i); // Changed from "A" to "C"
                optionA.textContent = "$"+ String.fromCharCode(i);
                selectElement.appendChild(optionA);
            } else {
                const optionA = document.createElement("option");
                optionA.value = "$"+ String.fromCharCode(i); // Changed from "A" to "C"
                optionA.textContent = "$"+ String.fromCharCode(i);
                selectElement.appendChild(optionA);
            }
        }

        

        // Create input field
        const inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.className = "w-full monospace";
        inputElement.name = "segment-field"

        // Create delete button
        const buttonElement = document.createElement("button");
        buttonElement.className = "voca-delete";
        buttonElement.innerHTML = '<i class="fa fa-trash"></i>';

        // Append all elements
        innerDiv.appendChild(selectElement);
        innerDiv.appendChild(inputElement);
        innerDiv.appendChild(buttonElement);
        wrapperDiv.appendChild(innerDiv);
        container.appendChild(wrapperDiv);

    });


    //Add transform button
    document.getElementById("voc-add-transform").addEventListener("click", function () {
        const container = document.getElementById("transform-container"); // Target div element

          const newElement = document.createElement("div");
            newElement.innerHTML = `
                <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2">
                    <input name="transform-target" type="text" class="w-full monospace">
                    <a>→</a>
                    <input name="transform-after" type="text" class="w-full monospace">
                    <button class="voca-delete"><i class="fa fa-trash"></i></button>
                </div>
                </div>
            `;

            container.appendChild(newElement); // Append new element to target div

    });


    //Add generate button
    document.getElementById("generate-words").addEventListener("click", function () {
        this.disabled = true;
        clearResults();
        let myFile = make_file();

        try {
            w.postMessage({
                file: myFile,
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
        localStorage.setItem('vocabug-lite', JSON.stringify([e.data.file, filename]));

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

                //here
                file_to_interface(file);

                localStorage.setItem('vocabug-lite', JSON.stringify([file, filename]));
            }
        };
        input.click();
    });

    // Save file button
    document.getElementById("save-file").addEventListener("click", function () {
        let link = document.createElement("a");
        let file = make_file();
        let file_boy = new Blob([file], { type: 'text/plain' });
        link.href = URL.createObjectURL(file_boy);


        let filename = document.getElementById("file-name").value;
        let ext_filename = filename;

        if (filename == '') { ext_filename = 'vocabug.txt'; } else { ext_filename = ext_filename + ".txt"; }

        link.download = ext_filename;
        link.click();
        URL.revokeObjectURL(link.href);
        // Save input text in user's localstorage for next session
        localStorage.setItem('vocabug-lite', JSON.stringify([file, filename]));
    });

        // Show keyboard
    document.getElementById("show-keyboard").addEventListener("click", function () {
        if (document.getElementById('show-keyboard').checked) {
            document.getElementById("voc-keyboard-table").style.display = "block";
        } else {
            document.getElementById("voc-keyboard-table").style.display = "none";
        }
    });

    $(".ipa-button").mousedown(function (e) {
        e.preventDefault();

        let activeElement = document.activeElement;

        if (activeElement && ((activeElement.tagName === "INPUT" && activeElement.type == "text")|| activeElement.tagName === "TEXTAREA")) {
            let start = activeElement.selectionStart;
            let end = activeElement.selectionEnd;

            // Insert character at cursor position
            let beforeText = activeElement.value.substring(0, start);
            let afterText = activeElement.value.substring(end);
            activeElement.value = beforeText + $(this).attr("value") + afterText;

            // Move cursor after inserted character
            activeElement.selectionStart = activeElement.selectionEnd = start + $(this).attr("value").length;

            activeElement.focus();
        }

    });
    
});


function is_a_percentage(str) {
    const num = Number(str);
    return !isNaN(num) && num >= 1 && num <= 100;
}
