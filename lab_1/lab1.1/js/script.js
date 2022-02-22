document.querySelector('.btn').onclick = myClick;
let flag = 0, 
    name = 'Число ділиться на ',
    explation = '';

function myClick() {
    let number;
    number = document.querySelector('.content-input').value;
    document.querySelector('.result').innerHTML = ' ';
    divisibilityTwo(number);
    if (flag) {
        document.querySelector('.explation').classList.add('active');
        document.querySelector('.result').innerHTML = name;
        document.querySelector('.explation').innerHTML = explation;
        flag = 0;
        name = 'Число ділиться на ';
        explation = ''
    }
    else {
        document.querySelector('.result').innerHTML = 'Число не ділиться на жодне з чисел';
    }
}
function divisibilityTwo(number) {
    if ((number % 2) === 0) {
        name = name + '2 ';
        flag = 1;
        explation += 'Число ділиться на 2 тоді і тільки тоді, коли його остання цифра ділиться на 2, тобто є парною.';
    }
    divisibilityThreeandNine(number);
}
function divisibilityThreeandNine(number) {
    let sum = 0, tmp, n = number;
    while (n) {
        tmp = n % 10;
        n = (n - tmp) / 10;
        sum += tmp;
    }

    if ((sum % 3) === 0) {
        name = name + '3 ';
        flag = 1;
        explation += 'Число ділиться на 3 тоді і тільки тоді, коли сума його цифр ділиться на 3.';
    }
    if ((sum % 9) === 0) {
        name = name + '9 ';
        flag = 1;
        explation += 'Число ділиться на 9 тоді і тільки тоді, коли сума його цифр ділиться на 9.';
    }
    divisibilityFiveandTen(number, name);
}
function divisibilityFiveandTen(number) {
    if ((number % 10) === 0 || (number % 10) === 5) {
        name = name + '5 ';
        flag = 1;
        explation += 'Число ділиться на 5 тоді, коли його остання цифра дорівнює 0 або 5.';
    }
    if ((number % 10) === 0) {
        name = name + '10 ';
        flag = 1;
        explation += 'Число ділиться на 10 тоді і тільки тоді, коли воно закінчується на нуль.';
    }
}

