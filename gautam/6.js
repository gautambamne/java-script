const name="Gautam"
const anotherName = "Bamne"
console.log(name + anotherName);
console.log(`Hello my name is ${name} and my surname is ${anotherName}`);

const gameName = new String('GautamGb')
console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'))

const substring = gameName.substring(0,4)
console.log(substring)

const substring1 = gameName.slice(-4,4)
console.log(substring1)

let gameNa = "      mortal - Kombate         "
const substring2 = gameNa.trim()
console.log(substring2)
console.log(gameNa)

console.log(gameNa.replace('m','l'))
console.log(gameNa.includes('gautam'))
console.log(gameNa.split('-'));
