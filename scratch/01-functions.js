function double(n) {
    return n * 2;
}
console.log(double(10))

let doubleOne = (n) => { return n * 2}
console.log(doubleOne(5))

let doubleTwo = n => n * 2
console.log(doubleTwo(2))

const paceLabel = (miles, minutes) => { return `${miles} at ${minutes / miles} min/mile` }
console.log(paceLabel(3.1, 40))

let broken = (n) => { n + " ruh roh." }
console.log(broken("oops"))

let brokenFixed = (n) => { return n + " ruh roh"}
console.log(brokenFixed("oops"))