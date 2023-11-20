// Program to create a constructor with 6 properties/key that are setters and getters that work on the firstName and lastName variables

const Person= function(first, last) {
    let firstName= first
    let lastName= last
  this.getFirstName = function() {return firstName;};
  this.getLastName= function() {return lastName;};
  this.getFullName= function() {return `${this.getFirstName()}${' '}${this.getLastName()}`;};
  this.setFirstName= function(first) { firstName=first;};
  this.setLastName= function(last) { lastName=last;};
  this.setFullName= function(first,last) { this.setFirstName(first);this.setLastName(last)};
  }

  let newPerson= new Person("Ade", "Wale")

 console.log(Object.keys(Person).length)
  console.log(newPerson.getFirstName())
  newPerson.setFullName('Haskell', 'Curry');
  console.log(newPerson.getFullName())
  
  