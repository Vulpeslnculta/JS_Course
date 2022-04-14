// const myFun = (callbackFun) => {
//     let value = 50;
//     callbackFun(value);
// };

// myFun(value => { console.log(value); }) 

let people = ['shaun', 'ryu', 'crystal'];

const logPerson = (person, index) => {
    console.log(`${index} - ${person}`);
};

people.forEach(logPerson);