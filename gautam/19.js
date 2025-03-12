// while do while loop 
let index = 0
while (index<=10) {
    // console.log(`value of index is ${index}`);
    index = index + 2;
    
}

let myArray = ['flash','batman', 'superman']
let arr = 0;

while(arr<myArray.length){
    // console.log(`value of hero is ${myArray[arr]}`);
    arr = arr+1;
}

// do while loop
let score = 0;
do {
    // console.log(`score is ${score}`);
    score++;
    

} while (score<10);


// for off loop
// array specific loop 
//  ["","",""]
//  [{},{},{}]

const arr1 = [1,2,3,4,5,6]

for (const num of arr1) {
    console.log(num)
    
}

const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(`Each character is ${greet}`);
    
    
}

// maps


const map = new Map()
map.set('IN',"insdia")
map.set('USA',"United state of america")
map.set('fr',"france")

// console.log(map);

for (const[ key, value ]of map) {
    // console.log(key,"=",value);
    
    
}

const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'rubby'

}

// for in loop
for (const key in myObject) {
    // console.log(myObject[key]);
    
}


const programming = ["js","rb","py","java"]

for (const key in programming) {
    // console.log(key);
    
}
// for each loop 

const coding = ["js","rb","py","java"]

coding.forEach(element => {
    console.log(element);
    
});

coding.forEach (function (val){
    console.log(val);
    
});

function printme(item){
    console.log(item);
    
}
coding.forEach(printme)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
});

const myCoding = [
    {
    languageName: "javascript",
    languageFileName: "js"
},
    {
},
    {
},
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
});
