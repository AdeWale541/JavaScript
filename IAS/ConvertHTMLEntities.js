//Program to convert select strings based on value
// USage of Switch to replace multiple if ... else
function convertHTML(str) {
    return str.split("").map((element)=> {
        switch (element) {
            case "&":
              return "&amp;";
            case "<":
              return "&lt;";
            case ">":
              return "&gt;";
            case '"':
              return "&quot;";
            case "'":
              return "&apos;";
            default: return element;}
    }).join("");
  }
  // Easier way to implement the program using Regex and Replace
  function convertHTML2(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
  }
  console.log(convertHTML2("Schindler's List"))
  console.log(convertHTML("Schindler's List"))