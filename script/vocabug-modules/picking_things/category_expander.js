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