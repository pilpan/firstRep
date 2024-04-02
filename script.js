// Определяем переменные с помощью разных ключевых слов
var myVar = 5;
let myLet = 10;
const myConst = 15;

// Типы данных
let number = -20;
let string = 'Привет, мир!';
let boolean = true;
let object = {
    key: 'value', obj: {
        a: '2'
    }
};
let array = [1, 2, 3, 4, 5];
// Операторы
let sum = myVar + myLet; // % /
let isEqual = myVar === myLet; // == === < >

// Условные операторы
if (number > 10) {
    console.log('Число больше 10');
} else {
    console.log('Число меньше или равно 10');
}

// Циклы
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
let test = ''
// Функции
function greet(name = 'Алексей') {
    test = name[0]
    // name = name.toUpperCase()
    return 'Привет, ' + name;
}

let plus = (a, b) => {
    return a + b
}
let greeting = greet('Миша');

// Работа с DOM
const button = document.getElementById('myButton');
const output = document.getElementById('output');
let emptyPage = document.querySelector('.emptyPage')
console.log(emptyPage);
emptyPage.innerText = '23'
emptyPage.innerHTML = `<a href='#'>33</a>`
emptyPage.remove()
let img = document.createElement('img')
output.appendChild(img)
button.addEventListener('click', function () {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(({ message }) => {
            img.style.height = '40vh'
            img.style.width = '50vh'
            img.src = message
        })
});

console.log(greet('123').a);
console.log(plus(4, 5));
