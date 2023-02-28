// console.log(23+97);
// console.log(1+2+3+4+5+6);
// console.log((4+6+9)/77);

// let a = 10;
// console.log(10);
// console.log(9*a);

// let b = 7 * a;
// console.log(b);

// const max = 57;
// const actual = max - 13;
// const percentage = actual / max;

// console.log(max);
// console.log(actual);
// console.log(percentage);

// Check the login exercise found on https://javascript.info/task/check-login
let userName = prompt(`Who's there?`);

if(userName === 'Admin') {
    let pass = prompt(`Password?`);

    if (pass === `TheMaster`) {
        alert(`Welcome!`);
    } else if (pass === '' || pass === null) {
        alert(`Canceled`);
    } else {
        alert(`Wrong password`);
    }
} else if (userName === `` || userName === null) {
    alert(`Canceled`);
} else {
    alert(`I don't know you`);
}