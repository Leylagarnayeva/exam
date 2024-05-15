function swapCase(str) {
    let swappedStr = '';
    for (let char of str) {
        if (char === char.toUpperCase()) {
            swappedStr += char.toLowerCase();
        } else {
            swappedStr += char.toUpperCase();
        }
    }
    return swappedStr;
}

console.log(swapCase('aBcD'));    
console.log(swapCase('jAvaScRIPt'));   
console.log(swapCase('ITBrainAcademy'));   
