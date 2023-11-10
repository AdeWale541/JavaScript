// use reduce to add up the age of all users in an array
const users = [
    { name: 'John', "age": 34.2, gender:"male" },
    { name: 'Amy', "age": 20.1, gender:"male" },
    { name: 'camperCat', "age": 3.99, gender:"female" }
  ];
  
  function getSumOfAge(arrayNew){
  const sumOfAges = arrayNew.filter(user=>user.age>5)
  .reduce((sum, user) => sum + user.age, 0)/arrayNew.filter(user=>user.age>5).length;

  return sumOfAges
}
  console.log(getSumOfAge(users));
  