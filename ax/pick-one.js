
// Wordsguru

/*
&THREE =
CV{`*1}(F)CV{`*9}CV{`*1}
CV{`*1}(F)CV{`*9}FCV{`*1}
CV{`*1}(F)CV{`*9}FCV{`*1}F
CV{`*1}(F)CV{`*9}CV{`*1}F

&TWO =
CV{`*9}CV{`*1}
CV{`*9}FCV{`*1}
CV{`*9}FCV{`*1}F
CV{`*9}CV{`*1}F

CVCV
CVFCV
CVFCVF
CVCVF

*/


function randomCharFromNestedBrackets(input) {
    const regex = /\[([^\[\]]+)\]/g;
    let result = input;

    while (regex.test(result)) {
        result = result.replace(regex, (match, p1) => {
            const options = p1.split(' ').filter(Boolean);
            return options[Math.floor(Math.random() * options.length)];
        });
    }
    console.log(result);
    return result.charAt(Math.floor(Math.random() * result.length));
}


function replaceOpenBrackets(inputString) {
    return inputString.replace(/\(/g, '[X[').replace(/\)/g, ']]');
}

function checkBrackets(str) {
    let squareOpen = 0;
    let squareClose = 0;
    let roundOpen = 0;
    let roundClose = 0;

    for (let char of str) {
        if (char === '[') squareOpen++;
        if (char === ']') squareClose++;
        if (char === '(') roundOpen++;
        if (char === ')') roundClose++;
    }

    return squareOpen === squareClose && roundOpen === roundClose;
}

const inputString = "a [!] (b c) ?{x y z} d e f [1 2 3 4 5 6 7 8 9 [[& $ @] A B C D E F G H I]] potato";



getRandomCharacterFromNestedBrackets(inputString);





const input = "c:1, r:5, ft:3, ghh";

// Split the input string into individual elements
const pairs = input.split(", ").map(pair => {
    if (pair.includes(":")) {
        return pair.split(":");
    } else {
        return [pair, "1"]; // Assign 1 as the value if no colon is present
    }
});

// Separate the keys and values into their respective arrays
const leftArray = pairs.map(pair => pair[0]);
const rightArray = pairs.map(pair => pair[1]);

console.log("Left Array:", leftArray); // ['c', 'r', 'ft', 'ghh']
console.log("Right Array:", rightArray); // ['1', '5', '3', '1']



// best

function weightedRandomPick(items, weights) {
    let totalWeight = weights.reduce((acc, w) => acc + w, 0);
    let randomValue = Math.random() * totalWeight;

    for (let i = 0; i < items.length; i++) {
        if (randomValue < weights[i]) { return items[i]; }
        randomValue -= weights[i];
    }
}

