// Шаг 1: Создаем массив с городами
let cities = ['Москва', 'Санкт-Петербург', 'Минск', 'Витебск'];

// Шаг 2: Создаем пустой массив для хранения температур
let temperatures = [];

// Шаг 3: Проходим по массиву городов, запрашивая у пользователя ввод температуры
for (let i = 0; i < cities.length; i++) { //Начинаем цикл, который будет перебирать все города в массиве.
    let temperature = prompt(`Введите температуру в городе ${cities[i]}`); //Запрашиваем у пользователя значение температуры
    temperatures.push(parseFloat(temperature)); // Добавляем введенную температуру в массив
}

// Шаг 4: Создаем список для отображения информации о каждом городе и его температуре
let list = document.createElement('ul');
for (let i = 0; i < cities.length; i++) {//Начинаем цикл, который будет перебирать все города в массиве.
    let listItem = document.createElement('li'); // Создаем новый элемент списка.
    listItem.textContent = `${cities[i]}: ${temperatures[i]}°C`; //Устанавливаем текст нового элемента списка, указывая название города и соответствующую температуру.
    list.appendChild(listItem); //Добавляем новый элемент в список, чтобы отобразить информацию о городе и его температуре.
    }

// Шаг 5: Добавляем список на страницу
document.body.appendChild(list);

// Шаг 6:  Находим максимальную и минимальную температуры
let maxTemperature = Math.max(...temperatures);
let minTemperature = Math.min(...temperatures);

// Шаг 7: Выводим информацию о погоде и максимальной/минимальной температуре
console.log('Информация о погоде:'); //Выводим сообщение "Информация о погоде:" в консоль.
for (let i = 0; i < cities.length; i++) { //Начинаем цикл, который будет перебирать все города в массиве.
console.log(`${cities[i]}: ${temperatures[i]}°C`); //В цикле выводим информацию о погоде для каждого города в формате "название города: температура°C" в консоль.
}
console.log(`Максимальная температура: ${maxTemperature}°C`); //Выводим сообщение о максимальной температуре в консоль.
console.log(`Минимальная температура: ${minTemperature}°C`); //Выводим сообщение о минимальной температуре в консоль.

// Шаг 8: Выводим информацию о погоде и максимальной/минимальной температуре на страницу
let maxTempElement = document.createElement('p');
maxTempElement.textContent = `Максимальная температура: ${maxTemperature}°C`;
document.body.appendChild(maxTempElement);

let minTempElement = document.createElement('p');
minTempElement.textContent = `Минимальная температура: ${minTemperature}°C`;
document.body.appendChild(minTempElement);