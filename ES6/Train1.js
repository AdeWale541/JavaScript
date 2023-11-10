//Difference between let and var

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i < 2) {
    printNumTwo = function() {
      return i;
    };
  }
}

i++;
console.log(printNumTwo());
i++