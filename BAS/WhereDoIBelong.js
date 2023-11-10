//Function to get what position a number would be in the array based on it's value
function getIndexToIns(arr, num) {
    let position=0;
      for(let i=0;i<arr.length;i++){
        if (num>arr[i]){
          position++;
        }else{
        }
      }
      return position;
    }
    
    console.log(getIndexToIns([40, 60], 50));

    /*let muio= new getIndexToIns([40, 60], 50);
muio.position=1;
    console.log(muio.position);*/
    