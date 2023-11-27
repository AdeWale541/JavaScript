// Program to decipher a code that shifts all numbers 13 digits forward. Only accepts capital letters and it loops back after Z to count from A again

function rot13(str) {
let finalValue=[]
        str.split("").forEach(function callback(value, index) {
        let newValue= str.charCodeAt(index)+13
        if (/[A-Z]/.test(value)&&newValue>90) {
            finalValue.push(String.fromCharCode(64+newValue-90));
        } else if(/[A-Z]/.test(value)) {finalValue.push(String.fromCharCode(newValue))
        } else{finalValue.push(value)}})
    return finalValue.join("")
    }
  
  console.log(rot13("SERR PBQR PNZC"));

 /*let alphas= "ABCDEFXYZ"
 for(let i=0;i<alphas.length;i++){
 console.log(alphas.charCodeAt(i));
}*/