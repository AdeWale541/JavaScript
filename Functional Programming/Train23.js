// Program to remove whitepaces(1 or more consecutive whitespaces) from a string and replace with an hyphen. 
//Also ensures it's returned as lower case and the striing is trimmed
// Only change code below this line
function urlSlug(title) {

    return title.trim().toLowerCase().split(/\s+/).join("-")
    }
    // Only change code above this line
    console.log(urlSlug(" Winter Is  Coming"));