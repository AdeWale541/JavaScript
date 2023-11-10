// The global variable
//function add adds a new book to the array without mutating the original array
// function remove removes a particular book from the array
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
let newArray=[];

function add(array, bookName) {
newArray= [...array]
  newArray.push(bookName);
  return newArray;
  
  // Change code above this line
}

// Change code below this line
function remove(array, bookName) {
  newArray= [...array]
  let book_index = newArray.indexOf(bookName);
  if (book_index === 0) {
newArray.shift();
return newArray;
  } else if(book_index>0){
let splicedArray= newArray.splice(0,book_index)
let secondSplicedArray= newArray.splice(1)
    return [...splicedArray,...secondSplicedArray];
  }else{ return newArray}
    // Change code above this line   
}
console.log(bookList);
console.log(add(bookList, "A Brief History of Time"));
console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));
console.log(remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies"));

