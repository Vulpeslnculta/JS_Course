const u1 = document.querySelector('.people');

const people = ['shaun', 'ryu', 'crystal'];

let html = ``;

people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;