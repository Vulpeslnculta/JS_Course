const password = 'p@ssw0rd';

if (password.length >= 12 && password.includes('@')) {
    console.log('that is a long and stong password here my boi');
} else if (password.length >= 12) {
    console.log('thats a one longy password here m8');
} else if (password.length >= 8 && password.includes('@')) {
    console.log('thats a complex password here bro');
} else if (password.length >= 8) {
    console.log('thats a not bad password here fellow user');
} else {
    console.log('What is this? You are joking right?');
}