

function guseinzade_distribution(no_of_items) {
    // get a list of weights determined by the items in distribution
    const jitter = (val, percent = 7) => val * (1 + percent * (Math.random() - 0.5) / 100);
    
    let weights = [];

    for (let i = 0; i < no_of_items; ++i) {
        weights.push(jitter(Math.log(no_of_items + 1) - Math.log(i + 1)));
    }
    return weights;
};

function zipfian_distribution(no_of_items) {
    // get a list of weights determined by the num_of_phonemes in distribution
    const jitter = (val, percent = 2) => val * (1 + percent * (Math.random() - 0.5) / 100);

    let weights = [];

    for (let i = 0; i < no_of_items; ++i) {
        weights.push(jitter(10 / (i + 1) ** 0.9));
    }
    return weights
};

function flat_distribution(no_of_items) {
    // get a list of weights determined by the num_of_phonemes in distribution

    let weights = [];

    for (let i = 0; i < no_of_items; ++i) {
        weights.push(1);
    }
    return weights
};

function extract_Value_and_Weight(input_list, default_distribution) {  //List, Str

    let my_values = [];
    let my_weights = [];

    // Check if all items lack a weight (i.e., none contain ":")
    let allDefaultWeights = input_list.every(input_list => !input_list.includes(":"));
    // If ALL items do NOT have a weight, give power-distribution
    if (allDefaultWeights) {
        if (default_distribution == "guseinzade") {
            my_values = input_list;
            my_weights = guseinzade_distribution(input_list.length);
        } else if (default_distribution == "zipfian") {
            my_values = input_list;
            my_weights = zipfian_distribution(input_list.length);
        } else {
            my_values = input_list;
            my_weights = flat_distribution(input_list.length);
        }
        return [my_values, my_weights];
    }

    input_list.forEach(item => {
        let [value, weight] = item.split(":"); // Split at semicolon
        // Default weight to 1 if missing or invalid
        weight = weight && !isNaN(weight) ? parseFloat(weight) : 1;
        my_values.push(value);
        my_weights.push(weight);
    });

    return [ my_values, my_weights ];
}

function valid_category_brackets(str) {
    const stack = [];
    const bracketPairs = { ']': '[' };

    for (let char of str) {
        if (Object.values(bracketPairs).includes(char)) {
            stack.push(char); // Push opening brackets onto stack
        } else if (Object.keys(bracketPairs).includes(char)) {
            if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
                return false; // Unmatched closing bracket
            }
        }
    }

    return stack.length === 0; // Stack should be empty if balanced
}

function valid_words_brackets(str) {
    console.log('here');
    const stack = [];
    const bracketPairs = { ')': '(', '>': '<', ']': '[' };

    for (let char of str) {
        if (Object.values(bracketPairs).includes(char)) {
            stack.push(char); // Push opening brackets onto stack
        } else if (Object.keys(bracketPairs).includes(char)) {
            if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
                return false; // Unmatched closing bracket
            }
        }
    }

    return stack.length === 0; // Stack should be empty if balanced
}

function replace_category_in_category(input, mappings) {
    return input.split('').map(char => 
        mappings[char] ? `[${mappings[char]}]` : char
    ).join('');
}


function resolve_nested_categories(input_list, distribution) {
    let nestedPattern = /\[[^\[\]]*\]/g;
    let matches;
    
    let items = [];
    let outputs = [];

    if (!valid_category_brackets(input_list)) {
        throw new Error('bad thing');
    }

    while ((matches = input_list.match(nestedPattern)) !== null) {
        let mostNested = matches[matches.length - 1]; // The last match is the deepest one
		
        items = mostNested.slice(1, -1).split(/[,\s]+/).filter(Boolean);
        
        if (items.length == 0) {
            items = ['^'];
        } else {
            outputs = extract_Value_and_Weight(items, distribution);
            items = weightedRandomPick(outputs[0], outputs[1]);
        }
        
        // Remove the most nested bracket, keeping its contents within the parent bracket
        input_list = input_list.replace(mostNested, items);
    }
    items = input_list.split(/[,\s]+/).filter(Boolean);
    outputs = extract_Value_and_Weight(items, distribution);
    items = weightedRandomPick(outputs[0], outputs[1]);
    input_list = items;

    
    return input_list;
}

function weightedRandomPick(items, weights) {
    let totalWeight = weights.reduce((acc, w) => acc + w, 0);
    let randomValue = Math.random() * totalWeight;

    for (let i = 0; i < items.length; i++) {
        if (randomValue < weights[i]) { return items[i]; }
        randomValue -= weights[i];
    }
}

function replaceCapitals(input, mappings) {
    function resolveMapping(str, history) {
        return str.split('').map(char => {
            if (mappings[char]) {
                if (history.includes(char)) {
                    return `🔄`; // cycle detected
                }
                return `[${resolveMapping(mappings[char], [...history, char])}]`;
            }
            return char;
        }).join('');
    }
    return resolveMapping(input, []);
}

console.log(resolve_nested_categories('z, [x, y:50] h, [a, b, [c, d]], []', "zipfian"))