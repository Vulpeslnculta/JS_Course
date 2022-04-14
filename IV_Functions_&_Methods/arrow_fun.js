// regular function
const calcArea = function(radius) {
    return 3.14159 * radius ** 2;
}

// arrow function
const calcAreaArrow = radius => 3.14159 * radius ** 2;

const area = calcArea(5);
console.log('area is ' + area);
const areaarrow = calcAreaArrow(5);
console.log('area arrow is ' + areaarrow);

// regular function
const greet = function() {
        return 'hello,  world';
    }
    // arrow function
const greetArrow = () => 'hello, world';

// regular function
const bill = function(products, tax) {
        let total = 0;
        for (let i = 0; i < products.length; i++) {
            total += products[i] + products[i] * tax;
        }
        return total;
    }
    // arrow function
const billarrow = (products, tax) => {
    let total = 0:
        for (let i = 0; i < products.length; i++) {
            total += products[i] + products[i] * tax;
        }
}