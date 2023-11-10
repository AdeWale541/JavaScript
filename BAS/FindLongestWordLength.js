function findLongestWordLength(str) {
    let sentenceArray= str.split("") //Note: Split divides the array each time the string in the bracket is observed.
                                    // The string is not counted
    let longestLength;
    if(sentenceArray.indexOf(" ")<0){

        longestLength= sentenceArray.length;
    } else{
        let splicedArray= sentenceArray.splice(0,sentenceArray.indexOf(" ")-0)
        sentenceArray.shift();
        longestLength= splicedArray.length

        while (sentenceArray.indexOf(" ")>=0){

            splicedArray= sentenceArray.splice(0,sentenceArray.indexOf(" ")-0)
            sentenceArray.shift();
            if(splicedArray.length> longestLength) {
                longestLength=splicedArray.length;
            }
        }
        if(sentenceArray.length> longestLength) {
            longestLength=sentenceArray.length;
        }


    }
    return longestLength;
  }
  
  console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));