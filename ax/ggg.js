const naturalWeights = (phonemes) => {
    const jitter = (val, percent = 10) => val * (1 + percent * (Math.random() - 0.5) / 100);
    const phons = phonemes.split(/\s+/gu);
    const weighted = {};
    const numPhons = phons.length;
    for (let i = 0; i < numPhons; ++i) {
        weighted[phons[i]] = jitter(Math.log(numPhons + 1) - Math.log(i + 1));
    }
    let temp = '';
    for (const key in weighted) {
        temp += `${key}:${weighted[key]} `;
    }
    temp.trim();
    return temp;
};