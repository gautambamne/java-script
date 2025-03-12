const marvelHero = ["ironman","spiderman","captian"]
const dcHero = ["superman","flash","batman"]

// marvelHero.push(dcHero)
// console.log(marvelHero)

let hero = marvelHero.concat(dcHero)
console.log(hero);

const ahero = [...marvelHero,...dcHero]

const another_array = [1,2,3,[4,5,6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("gautam"))
console.log(Array.from("gautam"))
console.log(Array.from({name: "gautam"}))

let score1 = 100
let score2 =200
let score3 = 300

let arr = Array.of(score1,score2,score3)
console.log(arr);
