function factorialize(num) {
   
    if(num==0){
      num=1
    } else{
        for (let i=num-1;i>0;i--){
        num= num*i
    }
    }
    
    return num;
  }
  
  console.log(factorialize(0));