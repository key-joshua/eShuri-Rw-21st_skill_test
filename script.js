const btn = document.getElementById("btn");
const input = document.querySelector("#input");
let message = document.querySelector("#results");

var onTyping = () => {
    message.innerHTML = "Typing ...";
}

const checkPrimeNumbers = () => {
    if (input.value.length === 0) return message.innerHTML = "Hy!!  Please insert number to check";
    if (input.value < 1) return message.innerHTML = "Hy!!  inserted number should be greater than 0";

    const primeNumbers = [];
    for (let index = 0; index <= input.value; index++) {
        if (index % 2 !== 0) primeNumbers.push(index);        
    }

    return message.innerHTML = `[${primeNumbers}]`;
}

btn.addEventListener('click', () => {
    checkPrimeNumbers();
});
