const romanCode={
    1: 'I',
    5: 'V',
    9: 'IX',
    10: 'X',
    50: 'L',
    90: 'XC',
    100: 'C',
    500: 'D',
    900: 'CM',
    1000:'M'
}

function convertToRoman(num) {
    let numArray= num.toString().split("")
    console.log(numArray)
    let romanNumeral=[]
        numArray.forEach(function callback(value, index) {
            
            romanNumeral.push(convertValueToRoman(Number(value) * Math.pow(10,numArray.length-1-index)))
        });
        console.log(romanNumeral)
    
        function convertValueToRoman(number){
            let romanValue=[]
         if (number>=1000){
            for (let i=0;i<number/1000;i++) {
                romanValue.push('M')
            }
         } else if (number>=100 && number<1000){
                if (number===900){ romanValue.push('CM')}
                else if (number===400){ romanValue.push('CD')}
                else if (number>=500){ romanValue.push('D');for (let i=0;i<(number-500)/100;i++) {
                                         romanValue.push('C')
                                         };}
                else if (number>=100){for (let i=0;i<number/100;i++) {
                                        romanValue.push('C')
                                        };};
         } else if(number >=10 && number<100){
                if (number===90){ romanValue.push('XC')}
                else if (number===40){ romanValue.push('XL')}
                else if (number>=50){ romanValue.push('L');for (let i=0;i<(number-50)/10;i++) {
                                    romanValue.push('X')
                                     };}
                else if (number>=10){for (let i=0;i<number/10;i++) {
                                    romanValue.push('X')
                                    };}
         } else if(number >=1 && number<10){
                if (number===9){ romanValue.push('IX')}
                else if (number===4){ romanValue.push('IV')}
                else if (number>=5){ romanValue.push('V');for (let i=0;i<number-5;i++) {
                                romanValue.push('I')
                                 };}
                else if (number>=1){for (let i=0;i<number;i++) {
                                romanValue.push('I')
                                };}            
            
            } else {return ""}
                     return romanValue.join("")
                }
            function convertValueToRoman2(value,size){



            }

        return romanNumeral.join("");
    }

    console.log(convertToRoman(1172));