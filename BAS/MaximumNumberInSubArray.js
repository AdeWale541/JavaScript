function largestOfFour(arr) {
    let maxArray=[];
      let maxNumber;
    for(let i=0;i<arr.length;i++){
maxNumber=arr[i][0];
     for (let j=0; j<arr[i].length;j++ ){
  

         if(arr[i][j]>maxNumber){
             maxNumber= arr[i][j]
             } else{
          
             }
    
     }
     maxArray.push(maxNumber);
    }
    
      return maxArray;
    }
    
    console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));