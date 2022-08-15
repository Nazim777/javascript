// js array reduce method with js object
const formFields ={
    name:{
        type:'text',
        label:'what is your name?',
        placeholder:'enter your name'
    },
    email:{
        type:'email',
        label:'what is your email ?',
        placeholder:'enter your email'
    },
    password:{
        type:'password',
        label:'what is your password?',
        placeholder:'enter your password'
    },
    confirm_password:{
        type:'password',
        label:'what is your confirm password?',
        placeholder:'enter confirm password'
    }

}


const hello =(obj,key)=>{
    return {
        ...obj[key]
    }

}
const data1 = hello(formFields,'name')
// console.log(data1)




// convert object to array using map method
const result =(obj) =>{
    return Object.keys(obj).map((item)=>({
        name:item,
        ...obj[item]
    }))
}
const data = result(formFields)
//console.log(data)





// console.log(Object.keys(formFields).reduce((accumulator,currentValue)=>{
//     console.log(`accumulator- ${accumulator} currentvalue- ${currentValue}`)
   
// }))



// convert object to object using reduce method
const transFormObject1 = (obj)=>{
    return Object.keys(obj).reduce((accumulator,currentValue)=>{
        accumulator[currentValue] ={
            ...obj[currentValue],
            value:''
        }
        return accumulator
    },{})
}
const data2 = transFormObject1(formFields)
//console.log(data2)





// convert object to array using map method
const hello2 =(obj) =>{
    return Object.keys(obj).map((item)=>({
        name:item,
        ...obj[item]

    }))
}
const data3 = hello2(data2)
//console.log(data3)


const hello3 = (obj) =>{
    return Object.keys(obj).map((item)=>({
        ...obj[item],
        value:''
    }))
}
const data4 = hello3(formFields)
//console.log(data4)


const hello4 = (obj) =>{
    return Object.keys(obj).reduce((accumulator,currentValue)=>{
        accumulator[currentValue] ={
            name:currentValue,
            ...obj[currentValue]
        }
        return accumulator

    },{})
}
const data5 = hello4(formFields)
console.log(data5)



// add new field on object
// const transFormObject = (obj) =>{
//  return Object.keys(obj).reduce((accmulator,currentValue)=>{
//         accmulator[currentValue]={
//             ...obj[currentValue],
//             value:''
//         }
//         return accmulator

//     },{})
// }

// const data = transFormObject(formFields)
// console.log(data)


// convert object to array 
// const mapObjectToArray = (obj)=>{
//  return   Object.keys(obj).map((item)=>({name:item,...obj[item]}))
// }


