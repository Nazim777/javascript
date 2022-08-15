// js array reduce method 

//console.log('hello word')
const arr = [1,2,3,4,5]
const sum  = arr.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue 
    
})
//console.log(sum)
const numbers = [1800, 50, 300, 20, 100];
const difference = numbers.reduce((accumulator,currentValue)=>{
    return accumulator - currentValue
})
//console.log(difference)

// const fruits = ["Banana", "Orange", "Apple"];
// let index = fruits.indexOf("Apple");
// console.log(index)


// remove duplicate elements from array
let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
const uniqueAgeGroup = ageGroup.reduce((accumulator,currentValue)=>{
    if(accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue)
    }
    return accumulator
},[])
// console.log(uniqueAgeGroup)

let people = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
  ];
 
  
const groupByAge = (arr,property) =>{
    return arr.reduce((accumulator,currentObject)=>{
        const key = currentObject[property]
        if(!accumulator[key]){
            accumulator[key] = []
        }
        accumulator[key].push(currentObject)
        return accumulator
    },{})
}

const hello = groupByAge(people,'age')
//console.log(hello)


const groupBy2 = (arr,property)=>{
  return  arr.reduce((accumulator,currentObject)=>{
       let key = currentObject[property]
        if(!accumulator[key]){
            accumulator[key] = []
        }
            accumulator[key].push(currentObject)
            return accumulator
    },{})
}

const result2 = groupBy2(people,'age')
//console.log(result2)
//   function groupBy(objectArray, property) {
//     return objectArray.reduce(function (accumulator, currentObject) {
//       let key = currentObject[property];
      
//       console.log(key)
     
//       if (!accumulator[key]) {
//         accumulator[key] = [];
//       }
//       accumulator[key].push(currentObject);
//       return accumulator;
//     }, {});
//   }
  
//   let groupedPeople = groupBy(people, "age");
// console.log(groupedPeople);



//  js Object.values()

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        const value = person[key];
       // console.log(value);

    }
}

const result = (obj,property1,property2,property3) =>{
const value1 = obj[property1]
const value2 = obj[property2] 
const value3 = obj[property3]
//console.log(value1,value2,value3)

}
result(person,'firstName','lastName','age')




const shoppingCart = [
    {
      product: 'burger',
      qty: 1,
      price: 500,
    },
    {
      product: 'banana',
      qty: 1,
      price: 10,
    },
    {
      product: 'apple',
      qty: 2,
      price: 20,
    },
  ];

const total = shoppingCart.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue.qty * currentValue.price 
},0)
console.log(total)






