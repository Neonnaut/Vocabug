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


function replaceSegments(input, mappings) {
    function resolveMapping(str, history) {
        let result = '';
        let i = 0;

        const mappingKeys = Object.keys(mappings).sort((a, b) => b.length - a.length); // Longest keys first

        while (i < str.length) {
            let matched = false;
function replaceSegments(input, mappings) {
    function resolveMapping(str, history) {
        let result = '';
        let i = 0;

        const mappingKeys = Object.keys(mappings).sort((a, b) => b.length - a.length); // Longest keys first

        while (i < str.length) {
            let matched = false;

            for (let key of mappingKeys) {
                if (str.startsWith(key, i)) {
                    if (history.includes(key)) {
                        result += '🔄'; // Cycle detected
                    } else {
                        result += resolveMapping(mappings[key], [...history, key]);
                    }
                    i += key.length;
                    matched = true;
                    break;
                }
            }

            if (!matched) {
                result += str[i];
                i++;
            }
        }

        return result;
    }

    return resolveMapping(input, []);
}
            for (let key of mappingKeys) {
                if (str.startsWith(key, i)) {
                    if (history.includes(key)) {
                        result += '🔄'; // Cycle detected
                    } else {
                        result += resolveMapping(mappings[key], [...history, key]);
                    }
                    i += key.length;
                    matched = true;
                    break;
                }
            }

            if (!matched) {
                result += str[i];
                i++;
            }
        }

        return result;
    }

    return resolveMapping(input, []);
}