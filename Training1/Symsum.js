let arr = [1, 2,3,4];

   
   function Summation(numarray) {
        var i=0;
        let size= numarray.length;
        var total =0;
        var offset=0;

        for (i;i<size;i++) {
         offset= Math.pow(-1,i);
            total= total + (numarray[i] * offset) ;
            }
            return total;
        }

      
        console.log(Summation(arr));