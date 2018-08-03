let n;
do {
    n = parseInt(prompt('Привіт! 😺 Я котик Фібоначчі і знаю всі його числа. Перевіримо? Введи порядковий номер: '));
} while (isNaN(n))

function fibonachi(n) {
    let one = 1;
    let two = 1;
    for (let i = 3; i <= n; i++) {
        const three = one + two;
        one = two;
        two = three;
    }
    return two;
}



function fibonachiArray(n) {
    let fibNums = [1, 1];
    for (let i = 3; i <= n; i++) {
        let nextFib = (fibNums[(i - 2)] + fibNums[(i - 1)]);
        fibNums.push(nextFib);
    }
    return fibNums[n - 1];
}



function fibonachiRecursion(n) {
    return n <= 1 ? n : fibonachiRecursion(n - 1) + fibonachiRecursion(n - 2);
}



const resultRecursion = fibonachiRecursion(n);
const resultArray = fibonachiArray(n);

const result = fibonachi(n);

alert('😺 мяу результат з циклу =' + result + ' результат з массиву=' + resultArray + 'результат з рекурсії =' + resultRecursion);
