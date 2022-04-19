// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('Clicked!');
// });
const ul = document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');

button.addEventListener('click', () => {
    ul.innerHTML += '<li>Im new round here!</li>';
})

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(e.target);
        // e.target.style.textDecoration = 'line-through';
        e.target.remove();
    });
});


ul.addEventListener('click', e => {
    // console.log(e);
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});