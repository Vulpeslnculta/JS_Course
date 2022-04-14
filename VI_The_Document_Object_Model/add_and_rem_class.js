// const content = document.querySelectorAll('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach(p => {
    if (p.textContent.includes('error')) {
        p.classList.add('error');
    }
    if (p.textContent.includes('success')) {
        p.classList.add('success');
    }
});

console.log(content.classList);