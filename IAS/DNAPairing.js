// Program that matches pairs of DNA such that if the input is A, it prints ["A","T"]
// if "T" it prints ["T","A"]
// if "C" it prints ["C","G"]}
// if "G" it prints ["G","C"]}
// Then puts all of this into an array

function pairElement(str) {
    
      
      return str.split("").map((element) => {if(element==="A"){return ["A","T"]}
      else if(element==="T"){return ["T","A"]}
      else if(element==="C"){return ["C","G"]}
      else if(element==="G"){return ["G","C"]}  })
    }
    
    console.log(pairElement("GCG"));
