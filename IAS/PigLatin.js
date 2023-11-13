/*Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
*/
// a?b:c is a ternary operator that shortens if else statements to 1 line. 
// For the above operation, it simply states that if a then do b else do c   

function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.toLowerCase().match(consonantRegex);
    return myConsonants !== null
      ? str    
      .toLowerCase()
      .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }
  
  console.log(translatePigLatin("Consonant"));
  
  //console.log(translatePigLatin("consonant"));