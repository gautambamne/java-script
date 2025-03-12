// array

const array = ["ram","shyam","siri","gemini"]
console.log(array[0])

const newArray = new Array(1,2,3,4,5,6)
console.log(newArray)

//Array methods

newArray.push(7)
console.log(newArray);

newArray.pop();
console.log(newArray)

newArray.unshift(0)
console.log(newArray)

newArray.shift()
console.log(newArray)

console.log(newArray.includes(9));
console.log(newArray.indexOf(3));

// const newArr = myArr.join()
// console.log(newArr);

const myArray = [0,1,2,3,4,5]
// slice splice
console.log("A", myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1)
console.log("B", myArray);

const myn2 = myArray.splice(1,3)
console.log(myn2)
console.log("C", myArray);
