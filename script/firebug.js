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





function clearResults() {
    document.getElementById('voc-output-words-field').innerHTML = "";
    document.getElementById('voc-output-message').innerHTML = "";
}
function setFilename(filename) {
    document.getElementById('file-name').value = filename;
}

$(window).on('load', function () {
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
        selectElement.name = "category-name"
        


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
        selectElement.name = "segments-name"
        


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
        inputElement.name = "segments-field"

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
                    <input type="text" class="w-full monospace">
                    <a>→</a>
                    <input type="text" class="w-full monospace">
                    <button class="voca-delete"><i class="fa fa-trash"></i></button>
                </div>
                </div>
            `;

            container.appendChild(newElement); // Append new element to target div



       

    });


});