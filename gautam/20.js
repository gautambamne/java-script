const coding = ["js","rubby","java","python"]

const value = coding.forEach((item)=>{
    console.log(item);
    return item
})
console.log(value);

const myNums = [1,2,3,4,5,5,6,7,8,9]
const abc=myNums.filter((num)=>{
    // console.log(num<4)
    return num<4;
})
console.log(abc);



const myNum1 = [1,2,3,4,5,6,7,8,9]

const xyz = myNum1.filter((num)=>num<4)
console.log(xyz); 

const new1 = []
new1.forEach((num)=>{
    if (num>4) {
        new1.push(num)
        
    }
})
console.log(new1);

const book =[
    {title:'Book1' , genre:'Fiction', publish:1981, edition:2004},
    {title:'Book2' , genre:'Non-Fiction', publish:1992, edition:20048},
    {title:'Book3' , genre:'History', publish:1989, edition:2008},
    {title:'Book4' , genre:'science', publish:1999, edition:2007},
    {title:'Book5' , genre:'History', publish:1987, edition:2010},
    {title:'Book6' , genre:'Fiction', publish:2000, edition:2025},
]

const userBook = book.filter((bk)=> bk.genre== "History");
// console.log(userBook);


const userbook1 = book.filter((bok)=>{
   return bok.publish>=1985 && bok.genre === "History"});
console.log(userbook1);

 
// map
 const arr = [1,2,3,4,5,6,7,8,9,10]

 const newarr = arr.map((num)=>num+10)
 console.log(newarr);
 

//  chaining

const newNum = arr.map((num)=>num*10).map((num)=>num+1)
    .filter((num)=>num>=40)

console.log(newNum);

// reduce function
const num =  [1,2,3]
const myTotal = num.reduce(function(acc , currval){
    console.log(`acc:${acc} and currval: ${currval}`);
    
    return acc + currval
},0)
console.log(myTotal);


const shopping = [
    {
        itemName : "jsCource",
        price: 2999
    },
    {
        itemName : "pythonCource",
        price: 3299
    },
    {
        itemName : "C++",
        price: 4999
    },
    {
        itemName : "Data Structure",
        price: 4999
    }
]

const GrandTotal = shopping.reduce((acc, num)=>acc + num.price,0)
console.log(GrandTotal);
