function replaceSegments(input, mappings) {
    function resolveMapping(str, history) {
        let result = '';
        let i = 0;

        // Extract and sort keys by length (longest first)
        const mappingKeys = [...mappings.keys()].sort((a, b) => b.length - a.length);

        while (i < str.length) {
            let matched = false;

            for (let key of mappingKeys) {
                if (str.startsWith(key, i)) {
                    if (history.includes(key)) {
                        result += '🔄'; // Cycle detected
                    } else {
                        const mappedValue = mappings.get(key) || '';
                        result += resolveMapping(mappedValue, [...history, key]);
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


export default replaceSegments;