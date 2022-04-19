const correctAnswers = ["A", "B", "A", "A"];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const hidden = document.querySelector('.d-none');


form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // checking answers

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });
    // showing result

    hidden.classList.remove('d-none');
    result.querySelector('span').textContent = `${score}%`;
});
setTimeout(() => {
    alert("hello");
});