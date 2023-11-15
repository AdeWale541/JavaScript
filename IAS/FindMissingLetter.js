
function fearNotLetter(str) {
let currentCharacterCode;
for(let i=0;i<str.length;i++){
currentCharacterCode= str.charCodeAt(i)
if(currentCharacterCode!=str.charCodeAt(0)+i){
    return String.fromCharCode(str.charCodeAt(0)+i);
}
}

return undefined
}

console.log(fearNotLetter("abcdefghijklnopqrstuvwxyz"));