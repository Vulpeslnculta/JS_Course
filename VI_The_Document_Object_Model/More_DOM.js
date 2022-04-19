const copy = document.querySelector('.copy-me');

const box = document.querySelector('.box');

copy.addEventListener('copy', () => {
    console.log('Why are you doing this?');
});

box.addEventListener('mousemove', e => {
    box.textContent = 'Mouse X: ' + e.offsetX + ', Mouse Y: ' + e.offsetY;
});

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});