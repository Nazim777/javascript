// js string method 

// indexOf method
let str = 'finding substring in string';
let index = str.indexOf('s');

//console.log(index);

// startsWith method

const title = 'john and jane Went Up the hill';
//console.log(title.startsWith('john'))

// endsWith method 
//console.log(title.endsWith('hill'))

// trim method 

const string = '  JS trim  '
const result = string.trim() 
//console.log(result)

const string1 = '   JavaScript   ';
const result1 = string1.trimStart()
// console.log(result1) 
// console.log(string1)


const string2 = '   JavaScript   ';
const result2 = string2.trimEnd()
// console.log(result2)
// console.log(string2)

// split method 
const string3 = 'JavaScript String split()';
const substring = string3.split(' ')
//console.log(substring)
//console.log(substring[1])

// substring method 
let string4 = 'JavaScript Substring';
let substring1 = string4.substring(0,10);
let substring2 = string4.substring(11)

// console.log(substring1);
// console.log(substring2)


// slice method 
const string5 = 'Hello';
const substring5 = string5.slice(2);
//console.log(substring5);

// concat  method 
let greeting = 'Hi';
let message = greeting.concat(' ','John')
//console.log(message)


// replace method 
let str1 = 'JS will, JS will rock you!';
let newStr= str1.replace('JS','JavaScript')
//console.log(newStr)

// replaceAll method 
const str2 = 'JS will, JS will rock you!';
const newStr1 = str2.replaceAll('JS','JavaScript')
//console.log(newStr1)


