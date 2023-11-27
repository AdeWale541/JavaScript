const currencyValueObject= { 
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100}


function checkCashRegister(price, cash, cid) {
    let registerStatus;
    let newChange=[];

    let changeDue= cash-price
    let currentCurrency, currentCurrencyUnit, currencyAmount, returnedChange; 
    let changeDisbursed=[]
    let totalChangeInRegister=0;

    let availableChange= cid.filter(element=> element[1] !=0)
    
     availableChange.forEach(element => { 
        totalChangeInRegister= element[1]+totalChangeInRegister
    });
console.log(totalChangeInRegister);
    totalChangeInRegister= (Math.round(totalChangeInRegister*100))/100
console.log(totalChangeInRegister)
    if (changeDue>totalChangeInRegister){
        registerStatus="INSUFFICIENT_FUNDS"
        newChange=[]

        return {status: registerStatus , change: newChange};
    } else if (changeDue===totalChangeInRegister){
        registerStatus= "CLOSED"
        newChange= cid
        return {status: registerStatus , change: newChange};
    } else if(changeDue<totalChangeInRegister){

        for (let i = cid.length-1; i >= 0; i--) {
             currentCurrency = cid[i][0];
             currentCurrencyUnit = currencyValueObject[currentCurrency];
             currencyAmount = cid[i][1];
             returnedChange = 0;

        while (changeDue >= currentCurrencyUnit && currencyAmount > 0) {
            changeDue = changeDue-currentCurrencyUnit;
            currencyAmount = currencyAmount- currentCurrencyUnit;
            returnedChange = returnedChange + currentCurrencyUnit;
            changeDue= (Math.round(changeDue*100))/100
          }
          if (returnedChange > 0) {
            changeDisbursed.push([currentCurrency, returnedChange]);
          }
        }
        console.log([returnedChange, changeDue])
        if (changeDue === 0) {
            registerStatus="OPEN"
            newChange= changeDisbursed
          return {status: registerStatus , change: newChange}
        }else{
            registerStatus="INSUFFICIENT_FUNDS"
            newChange=[]
          return {status: registerStatus , change: newChange};
        }
      }

    }
    function roundTo2DP(number){
        let stringNum= number.toString().match(/^\d+[.]?[\d]?[\d]]?/)

    return Number(stringNum)
    }
    //console.log(roundTo2DP(335))
    //console.log(roundTo2DP(2.12945))
    console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
    /*availableChange.forEach(prop => {
        for(let key in currencyValueObject){
           console.log([key,currencyValueObject[key],(totalChange*100) % (currencyValueObject[key]*100)])
            if ((totalChange*100) % (currencyValueObject[key]*100)=== 0 && prop[1]>=totalChange){
                registerStatus = "OPEN"
                newChange= availableChange.map(element=> {if(element===prop){return [prop[0],prop[1]-totalChange]}else{return element}})
                breakOuterLoop= true;
          break;
                    }     
                    if(breakOuterLoop){ 
                        return }
        }
        if(breakOuterLoop){ 
            return }
    });*/

  //console.log(breakOuterLoop)

 
   
  

  