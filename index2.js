
const array = [10,7,19,22,8,100,49]
const newArray = []
let count = 0
for(let i = 0 ; i < array.length; i ++) {
   
    if(array[i]%2==0) {
        count ++
       newArray.push(array[i]*2)
    }
    
}


console.log(newArray,count)