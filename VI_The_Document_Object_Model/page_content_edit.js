const para = document.querySelector('p');

console.log(para.innerText);
para.innerText = ' pozdrawiam mame';


const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += 'tate tez';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML);

// content.innerHTML += '<h2>New line</h2>';

const people = ['tom', 'jerry', 'bob'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});