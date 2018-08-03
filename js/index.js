let n;
do {
    n = parseInt(prompt('Привіт! 😺 Я кіт Фібоначчі і знаю всі його числа. Перевіримо? Введи порядковий номер: '));
} while (isNaN(n))

function fibonachi(n) {
    let one = 1;
    let two = 2;
    for (let i = 3; i <= n - 1; i++) {
        let three = one + two;
        one = two;
        two = three;
    }
    return two;
}

const result = fibonachi(n);

alert('😺 мяу ' + result);
