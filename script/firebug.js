//import getVocExample from "./vocabug-modules/examples.js";

//const w = new Worker("./script/vocabug-modules/worker.js", { type: "module" });

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

    // wordshapes
    const wordshapes = document.getElementById('word-shapes').value;

    //alphabet
    const alphabet = document.getElementById('alphabet').value;

    // graphemes
    const graphemes = document.getElementById('graphemes').value;
    
    // transforms containers
    const transformContainer = document.getElementById("transform-container");
    let transforms = '';
    transformContainer.querySelectorAll(".flex.items-center").forEach((item) => {
        const transformTarget = item.querySelector("input[name='transform-target']");
        const transformAfter = item.querySelector("input[name='transform-after']");
        
        if (transformTarget.value != '' && transformAfter.value != '' ) {
            transforms += transformTarget.value + ' => ' + transformAfter.value + '\n';
        }
    });

let file = 
`category_distribution: ${category_distribution}

${categories.trim()}

num_syllables: ${min_syllables} - ${max_syllables}

${segments.trim()}

wordshape_distribution: ${wordshape_distribution}
optionals_weight: ${optionals_weight}
words: ${wordshapes}
alphabet: ${alphabet}

graphemes: ${graphemes}

BEGIN transform:
${transforms.trim()}
END`

    return file
}

function file_to_interface(file) {
    let myArray = file.split("\n");
    let transform_mode = false;
    let has_dollar_s = false;

    for (let i = 0; i < myArray.length; i++) {
        let line = myArray[i].trim();

        if (transform_mode) {
            // Handle transform lines

            // Return word, field, valid, isCapital, hasDollarSign
            let dividedValues = divideString('=>', line);
            console.log(dividedValues);

            const category_container = document.getElementById("transform-container"); // Target div element
            category_container.innerHTML = ''; // Clear existing categories

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
            targetElement.name = "category-field"
            targetElement.value = "foobar";

            // Create name input field
            const my_arrow = document.createElement("a");
            my_arrow.innerHTML = "→";

            // Create after input field
            const afterElement = document.createElement("input");
            afterElement.type = "text";
            afterElement.className = "w-full monospace";
            afterElement.name = "category-field"
            afterElement.value = "foobar";

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
            category_container.appendChild(wrapperDiv);

        } else {
            if (line.startsWith("category_distribution:")) {
                if (line.split(":")[1].trim().toLowerCase() == "flat") {
                    document.getElementById('category-distribution').value = "Flat";
                } else if (line.split(":")[1].trim().toLowerCase() == "gusein-zade") {
                    document.getElementById('category-distribution').value = "Gusein-zade";
                } else if (line.split(":")[1].trim().toLowerCase() == "zipfian") {
                    document.getElementById('category-distribution').value = "Zipfian";
                } else {
                    document.getElementById('category-distribution').value = "Flat";
                }

            } else if (line.startsWith("optionals-weight:")) {
                if (is_a_percentage(line.split(":")[1].trim())) {
                    document.getElementById('optionals-weight').value = line.split(":")[1].trim();
                } else {
                    document.getElementById('optionals-weight').value = '10'; // Default value
                }

            } else if (line.startsWith("num_syllables:")) {
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

            } else if (line.startsWith("wordshape_distribution:")) {
                if (line.split(":")[1].trim().toLowerCase() == "flat") {
                    document.getElementById('word-shape-distribution').value = "Flat";
                } else if (line.split(":")[1].trim().toLowerCase() == "gusein-zade") {
                    document.getElementById('word-shape-distribution').value = "Gusein-zade";
                } else if (line.split(":")[1].trim().toLowerCase() == "zipfian") {
                    document.getElementById('word-shape-distribution').value = "Zipfian";
                } else {
                    document.getElementById('word-shape-distribution').value = "Flat";
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
                let dividedValues = divideString('=>', line);

                const category_container = document.getElementById("category-container"); // Target div element
                category_container.innerHTML = ''; // Clear existing categories

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
                    if ("h" === "n") {
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
                inputElement.value = "foobar";

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


function clearResults() {
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
              <input type="text" name="category-field" class="w-full monospace"></input>

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
function setFilename(filename) {
    document.getElementById('file-name').value = filename;
}

$(window).on('load', function () {
    //Copy results button
    document.getElementById("output-words-copy").addEventListener("click", function () {
        let output_words_field = document.getElementById("voc-output-words");

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
        if (window.confirm("Clear EDITOR TEXT and GENERATED WORDS?")) {

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

        let myFile = make_file();

        console.log(myFile);

        console.log(document.getElementById('num-of-words').value),
        console.log(document.querySelector('input[name="mode-type"]:checked').value),
        console.log(document.getElementById('sort-words').checked),
        console.log(document.getElementById('capitalise-words').checked),
        console.log(document.getElementById('remove-duplicates').checked),
        console.log(document.getElementById('force-words').checked),
        console.log(document.getElementById('word-divider').value)

    });

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
});


function is_a_percentage(str) {
    const num = Number(str);
    return !isNaN(num) && num >= 1 && num <= 100;
}
