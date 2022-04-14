const scores = [15, 28, 32, 46, 0, 53, 68, 72, 85, 97, 102, 32, 82];

for (let i = 0; i < scores.length; i++) {

    if (scores[i] === 0) {
        continue;
    }

    console.log('Your score is: ' + scores[i]);

    if (scores[i] >= 100) {
        console.log('You won!');
        break;
    }
}