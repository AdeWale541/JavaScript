//Creating Constructors 
// Dog is a constructor
// Constructors have properties, that's the distinct difference between constructors and normal functions. There is a property this.name
function Dog(){
    this.name= "Foil";
    this.color= 'Brown';
    this.numLegs=  4;
    }

    let hound= new Dog();
    hound.name= "Bingo";
    hound.color= "Green";
    hound.numLegs= 2;

    console.log(hound);