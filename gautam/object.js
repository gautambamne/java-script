function multipleBy5(num){
    return num*5
}

multipleBy5.power = 5;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUSer(username,score){
    this.username = username;  
    this.score = score;

}

createUSer.prortotype.increment = function(){
    this.score++
}
createUSer.prortotype.printme = function(){
   console.log(`price is ${this.score}`);
   
}

const chai = new createUser("chai",25)
const tea =  createUser("tea",20)

chai.printme()