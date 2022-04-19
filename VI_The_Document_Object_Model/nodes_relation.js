const title = document.querySelector('h1');

Array.from(title.children).forEach(child => {
    console.log(child);
})