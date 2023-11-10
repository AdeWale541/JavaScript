class Promise{
    constructor (resolve,reject){
  this.resolve=resolve;
  this.reject=reject;
  
  
    }
  }
  
  
  
  const makeServerRequest=new Promise((resolve,reject)=> {
  
    const makeServerRequest = new Promise((resolve, reject) => {
        // responseFromServer represents a response from a server
        let responseFromServer;
          
        if(responseFromServer) {
          // Change this line
       resolve("We got the data");
        } else {  
          // Change this line
          reject("Data not received");
        }
      });
  
  });