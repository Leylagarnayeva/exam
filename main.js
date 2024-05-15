function swapCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      if (char === char.toUpperCase()) {
        result += char.toLowerCase();
      } else {
        result += char.toUpperCase();
      }
    }
    return result;
  }
  
  console.log(swapCase('aBcD')); 
  console.log(swapCase("jEDacAdEMy"));

















// function swapCase(str) {
//     let swappedStr = '';
//     for (let char of str) {
//         if (char === char.toUpperCase()) {
//             swappedStr += char.toLowerCase();
//         } else {
//             swappedStr += char.toUpperCase();
//         }
//     }
//     return swappedStr;
// }

// console.log(swapCase('aBcD'));    
// console.log(swapCase('jAvaScRIPt'));   
// console.log(swapCase('ITBrainAcademy'));   
