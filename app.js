// js object 
const person1 = {
    firstName :'Abdus',
    lastName :'Salam',
    fullName :()=>{
        console.log(`full name is ${person.firstName} ${person.lastName}`)
        
    }
}

//person.fullName()

function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName
    this.getFullName = function() {
        return this.firstName + " " + this.lastName 
    }
}
const hello = new Person ('james','smith')
//console.log(hello.getFullName())
const counter = {
    count : 0 ,
    next : function() {
        const value = 0
        value += ++this.count
    }
}

//console.log(counter.next())


// js for in loop 

var person = {
    firstName: 'John',
    lastName: 'Doe'
};

for(var prop in person) {
   // console.log(prop + ':' + person[prop]);
}

for(const prop in person) {
   // console.log(`${prop} : ${person[prop]}`)
}


var decoration = {
    color: 'red'
};

var circle = Object.create(decoration);
circle.radius = 10;


for(const prop in circle) {
   // console.log(`${prop} : ${circle[prop]}`);
}



const team = {
    player1: {
        name: 'Shakib',
        age: 34
    },
    player2 : {
        name: 'Mahmudullah',
        age: 34
    },
    player3 : {
        name: 'Tamim',
        age: 35
    },
    player4 : {
        name: 'Musfikur Rahim',
        age: 32
    },
    player5 : {
        name: 'Taskin',
        age: 32
    },
    player6 : {
        name: 'Taijul',
        age: 35
    }
   
}

const data = (obj) =>{
    return Object.keys(obj).map((item)=>({
        player: item,
        ...obj[item]
    }))
}
const result = data(team)
//console.log(result)


const data1 = (arr,property) =>{
  return arr.reduce((accumulator, currentValue)=>{
        const key = currentValue[property]
        if(!accumulator[key]){
            accumulator[key] = []
        }
        accumulator[key].push(currentValue)
        return accumulator
    },{})
}
const result1 = data1(result,'age')
//console.log(result1)

const person2 = {
    name: 'Tamim',
    age: 34,
    profession: 'Cricketer'
}
for(const prop in person2) {
   // console.log(`${prop} : ${person2[prop]}`)
   if(person2.hasOwnProperty(prop)){
   // console.log(`${prop} : ${person2[prop]}`)
   }
}


const person3 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

// const data2 = (person3) =>{
//     for(const prop in person3) {
//         if(person3.hasOwnProperty(prop)){
//             const value = person3[prop]
//             console.log(value)
//         }
//     }
// }
// data2(person3)

for(const prop in person3) {
    if(person3.hasOwnProperty(prop)){
        const value = person3[prop]
       // console.log(value)
    }
}


// object.values method
const person4 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};
const profile = Object.values(person4)
//console.log(profile)




// object.entries method
const person5 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

const result2 = Object.entries(person5);
//console.log(result2);

 
// factory function
let person6 = {
    firstName: 'Jane',
    lastName: 'Doe',
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    },
  };
//console.log(person6.getFullName());



// optional chaining operator
const getUser = (id) =>{
    if(id<=0){
        return null
    }
    return{
        id: id,
        userName: 'admin',
        profile: {
           name: 'john Doe',
          email: 'test@gmail.com'
        }
    }
}
const user= (getUser(1))
//console.log(user)
const user2 = getUser(2) 
const profile1 = user2?.profile
//console.log(profile1)
const user3 = getUser(3)
//console.log(user3?.profile)
const user4 = getUser(0);
const profile2 = user4?.profile
//console.log(profile2)

