const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach((num) => {
    double.push(num * 8);
})
console.log(double);

const mapArray = array.map((item) => {
    return item + "cunt"
})

console.log(mapArray)