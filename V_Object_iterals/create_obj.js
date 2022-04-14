let user = {
    name: "crystal",
    age: 30,
    email: "crystal@mail.com",
    location: "berlin",
    blogs: ["why mac & cheese rules", "10 things to make with marmite"],
};
console.log(user.name);

user.age = 35;
console.log(user.age);

console.log(user['name']);

user['name'] = 'shawn';

console.log(user['name']);

console.log(typeof user);
// that's dictionary for god's sake!