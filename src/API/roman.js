const errorLetter = [];

const letterMesagge = (letter) => {
  let mesagge;
  switch (letter) {
    case 'V':
      mesagge = 'V (5)';
      break;
    case 'L':
      mesagge = 'L (50)';
      break;
    case 'D':
      mesagge = 'D (500)';
      break;
    default:
      mesagge = 'Not error';
      break;
  }
  return mesagge;
};

const isValidLetters = (arrayRomans) => {
  const romans = ['V', 'L', 'D'];
  const count = romans.map((letter) => arrayRomans.filter((e) => e === letter).length);
  const valid = count.every((n) => n < 2);
  count.filter((e, index) => {
    if (e >= 2) errorLetter[0] = romans[index];
    return null;
  });
  return valid;
};

const isValidRepetition = (stringRomans) => {
  const romans = ['I', 'X', 'C', 'M'];
  const regex = /(.)\1*/g;
  const arr = stringRomans.match(regex);
  const arrOne = arr.filter((e) => romans.indexOf(e[0]) !== -1);

  let mapFinal = arrOne.map((n) => n.length < 4);

  let isValid = mapFinal.every((e) => e === true);

  if (isValid) {
    const arrayRoman = stringRomans.split('').sort().join('');
    const arr2 = arrayRoman.match(regex);
    const arrTwo = arr2.filter((e) => romans.indexOf(e[0]) !== -1);

    mapFinal = arrTwo.map((n) => n.length < 5);

    isValid = mapFinal.every((e) => e === true);
  }

  mapFinal.filter((e, index) => {
    if (e === false) errorLetter[0] = arrOne[index].charAt(0);
    return null;
  });
  return isValid;
};

const isValidChar = (arrayRomans) => {
  const romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const isFound = arrayRomans.every((e) => romans.includes(e));
  return isFound;
};

const isValidSubstraction = (roman) => {
  const romans = ['VX', 'VL', 'VC', 'VD', 'VM', 'LC', 'LD', 'LM', 'DM'];
  const exist = romans.map((e) => roman.indexOf(e));
  const valid = exist.every((n) => n < 0);
  exist.filter((e, index) => {
    if (e >= 0) errorLetter[0] = romans[index].charAt(0);
    return null;
  });
  return valid;
};

const isValidPosition = (roman) => {
  const romans = ['IIV', 'IIX', 'IL', 'IC', 'ID', 'IM', 'XXL', 'XXC', 'XD', 'XM', 'IVI', 'IXI'];
  const exist = romans.map((e) => roman.indexOf(e));
  const valid = exist.every((n) => n < 0);
  return valid;
};

const convert = (letter) => {
  let mesagge;
  switch (letter) {
    case 'I':
      mesagge = 1;
      break;
    case 'V':
      mesagge = 5;
      break;
    case 'X':
      mesagge = 10;
      break;
    case 'L':
      mesagge = 50;
      break;
    case 'C':
      mesagge = 100;
      break;
    case 'D':
      mesagge = 500;
      break;
    case 'M':
      mesagge = 1000;
      break;
    default:
      mesagge = 'error';
      break;
  }
  return mesagge;
};

const letterConvertion = (romans) => {
  const arabigos = romans.map((e) => convert(e));
  let total = 0;

  arabigos.forEach((current, index, array) => {
    if (current >= array[index + 1] || index === array.length - 1) {
      total += current;
    } else {
      total -= current;
    }
  });

  return total;
};

module.exports = {
  errorLetter,
  letterMesagge,
  isValidLetters,
  isValidRepetition,
  isValidChar,
  isValidSubstraction,
  isValidPosition,
  letterConvertion,
};
