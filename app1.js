// js array method 


// splice method
const scores = [1,2,3,4,5,6]
scores.splice(4,2)
//console.log(scores)

const colors = ['red', 'green', 'blue'];
colors.splice(2,0,'purple')
//console.log(colors)
let languages = ['C', 'C++', 'Java', 'JavaScript'];
languages.splice(1, 1, 'Python');
//console.log(languages)
languages.splice(2,1,'C#','Swift','Go');
//console.log(languages)

// indexOf method
const scores1 = [1,2,3,4,5,6]
//console.log(scores1.indexOf(2))
const scores2 = [1,2,2,4,5,2]
//console.log(scores2.lastIndexOf(2))

// findIndex method
let ranks = [1, 5, 7, 8, 10, 7];
let index = ranks.findIndex((item)=>item==5)
//console.log(index)

const product = [
    {name: 'banana',price :20},
    {name:'apple',price: 30},
    {name:'grape', price: 40},
   
]

const productIndex = product.findIndex((item)=>item.price==30)
//console.log(productIndex)

// includes method 
if(scores.indexOf(2) !==-1){
   // console.log(scores.includes(2))
}

// reduce method 

let shoppingCart = [
    {
      product: 'phone',
      qty: 1,
      price: 500,
    },
    {
      product: 'Screen Protector',
      qty: 1,
      price: 10,
    },
    {
      product: 'Memory Card',
      qty: 2,
      price: 20,
    },
  ];

  const total = shoppingCart.reduce((accumulator,currentValue)=>{
    return accumulator+ currentValue.qty * currentValue.price
  },0)
 // console.log(total)


// sort method 
let numbers = [10, 20, 30,0, 1 , 2, 3];
numbers.sort((a,b)=>{
    if(a>b) return 1 
    if(a<b) return -1 
    return 0 ;
})
//console.log(numbers)
numbers.sort((a,b)=>{
    if(a<b) return 1 
    if(a>b) return -1 
    return 0 ;
})
//console.log(numbers)

let animals = [
    'bee','ant', 'elephant','cat', 'dog', 
];

animals.sort()
//console.log(animals)
animals.sort((a,b)=>{
    if(a<b) return 1 
    if(a>b) return -1 
    return 0 ;
})
//console.log(animals)

let scores4 = [
    9, 80, 10, 20, 5, 70
];

scores4.sort((a,b)=>a-b)
//console.log(scores4)

let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];

employees.sort((a,b)=>{
    return a.salary - b.salary
})
//console.table(employees)

employees.sort((a,b)=>{
    let x = a.name.toUpperCase() 
    let y = b.name.toUpperCase()
  return  x==y ? 0 : x>y ? 1 : -1
})
//console.table(employees)
employees.sort((a,b)=>{
    let x = new Date ( a.hireDate) 
    let y = new Date (b.hireDate)
    return x == y ? 0 : x>y ?1 : -1 
})
//console.table(employees)



let rivers = ['Nile', 'Amazon', 'Congo', 'Mississippi', 'Rio-Grande'];

rivers.sort((a,b)=>{
    return a.length - b.length
})
//console.log(rivers)

// concat method 
let arr1 = [1,3,5];
let arr2 = [2,4,6];
let arr3 = ['a','b','c','d']
let arr4 = arr1.concat(arr2)
//console.log(arr4)
let arr5 = arr1.concat(arr2,arr3)
//console.log(arr5)

// flat method 
const numbers1 = [1, 2, [3, 4, 5]];
const result = numbers1.flat()
//console.log(result)

// array destructuring

const Score = () =>{
  return [60,70,80,90]
}
const [a,b,c,d] = Score()
console.log(a,b,c,d)
const hello = [ 1,2,3,4,5,6]
const [x,y,z] = hello
console.log(x,y,z)
const hello1 = [
  {
    name: 'john doe',
    age: 35
  },
  {
    name: 'jane doe',
    age: 40
  }
]
const [obj1,obj2] = hello1
console.log(obj1,obj2)
