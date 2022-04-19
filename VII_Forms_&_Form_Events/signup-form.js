const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value);
    // console.log(form.username);
    // Validation

    const username = form.username.value;

    if (usernamePattern.test(username)) {
        feedback.textContent = 'Valid username';
    } else {
        feedback.textContent = 'Invalid username';
    };
});

// live feedback

form.username.addEventListener('keyup', e => {
    // console.log(e.targer.value, form.username.value);
    if (usernamePattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttetibute('class', 'error');
    }
});

// Regular expressions

// const username2 = 'niko';
// const pattern = /^[a-zA-Z]{6,}$/;

// // let result = pattern.test(username2);

// // if (result) {
// //     console.log('Valid username');
// // } else {
// //     console.log('Invalid username');
// // };

// let result = username.search(pattern);
// console.log(result);