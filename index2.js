
const array = [10,7,19,22,8,100,49]
const newArray = []
let count = 0
for(let i = 0 ; i < array.length; i ++) {
   
    if(array[i]%2==0) {
        count ++
       newArray.push(array[i]*2)
    }
    
}


//console.log(newArray,count)

const person = {
    name: 'Rahim',
    age: '30',
    email: 'rahim@gmail.com'
}

const obj = {
    employe: {...person}
}

//console.log(obj)

const employeData = [
    {
        name: 'Rahim',
        age: 30,
        email:'rahim@gmail.com'
    },
    {
        name: 'Habib',
        age: 40,
        email:'habib@gmail.com'
    },
    {
        name: 'Alamin',
        age: 50,
        email:'alamin@gmail.com'
    },
    {
        name: 'Hakim',
        age: 60,
        email:'hakim@gmail.com'
    }
]

const obj2 = {
    profession:'teacher',
    nationality:'Bangladeshi'
}


const employeProfile = {
     employes:[...employeData],
   // hello: employeData
   other:{...obj2}
}

//console.log(employeProfile)


let newArray1 = []

for(let i = 0 ; i<employeProfile.employes.length;i++){
  //  console.log(employeProfile.employes[i])
  //newArray1.push(employeProfile.employes[i])
  newArray1.push({...employeProfile.employes[i],isCompletd:'false'})
   
}
//console.log(newArray1)



const profile = [
    {
        name: 'Rahim',
        age: 30,
        email:'rahim@gmail.com'
    },
    {
        name: 'Habib',
        age: 40,
        email:'habib@gmail.com'
    },
    {
        name: 'Alamin',
        age: 50,
        email:'alamin@gmail.com'
    },
    {
        name: 'Hakim',
        age: 60,
        email:'hakim@gmail.com'
    }
]

const newArray2 = []

for(let i = 0 ; i<profile.length; i++){
    //console.log(profile[i])
    newArray2.push({...profile[i],isCompletd:'false'})
}

const newArray3 = profile.map((item)=>{
    return{
        ...item,
        isCompletd: false
    }
})
//console.log(newArray3)


//console.log(newArray2)

const newArray4 = []
for(let i = 0; i<profile.length;i++){
    if(profile[i].age<50){
        newArray3.push(profile[i])
    }
}

//console.log(newArray4)

const filterArray = profile.filter((item)=>{
    return item.age<50
})
//console.log(filterArray)

const newArray5 = []
for(let i = 0; i<profile.length;i++){
    if(profile[i].age<50){
        newArray5.push({...profile[i],isCompletd:false})
    }
}

//console.log(newArray5)


const hello = (value)=>{
    return value
}

const result = (value)=>{
    const value1 = hello(value)
    console.log(value1*2)

}

//result(5)


const obj4 = {
    name:'Rahim',
    age:30,
    email:'rahim@gmail.com'
}

for(let item in obj4){
  // console.log(obj4[item])
}



