let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);

if (huRegex.test(humStr)== true){
    console.log("It is true");
}
