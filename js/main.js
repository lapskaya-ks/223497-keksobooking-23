function getRandom (min, max) {

  if (min >= max) {
    return 'Появится какая-нибудь ошибка';
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandom (100, 90);


function getArbitrary(min, max, maxSymbol = 0) {
  if (min >= max) {
    return ('Задан неверный диапазон! Нужно указать другое число');
  }

  const countNumber = 10 ** maxSymbol;
  return ~~((Math.random() * (max - min) + min) * countNumber) / countNumber;
}

getArbitrary(1, 10000, 3);
