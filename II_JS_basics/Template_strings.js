const title = 'best reads of 2019';
const author = 'Nate';
const likes = 30;

// let result = 'The blog called ' + title + ' by ' + author + ' got ' + likes + ' likes';
// console.log(result);

// let result2 = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result2);

let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
    `;
console.log(html);