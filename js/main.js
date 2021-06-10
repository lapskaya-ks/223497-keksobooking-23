function getRandom (min, max) {

  if (min < 0 || max < 0 || min >= max) {
    throw Error ('Нужно указать другое число');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandom(1, 10000);

function getArbitrary (min, max, maxSymbol = 0) {
  if (min < 0 || max < 0 || min >= max) {
    throw Error ('Нужно указать другое число');
  }

  const countNumber = 10 ** maxSymbol;
  return ~~((Math.random() * (max - min) + min) * countNumber) / countNumber;
}

getArbitrary(1, 10000, 3);
