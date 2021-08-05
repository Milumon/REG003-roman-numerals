const {
  errorLetter,
  letterMesagge,
  isValidLetters,
  isValidRepetition,
  isValidChar,
  isValidSubstraction,
  isValidPosition,
  letterConvertion,
} = require('./roman');

module.exports.parse = (roman) => {
  if (typeof roman !== 'string') {
    throw new Error('Not a string');
  }
  const romanCapital = roman.toUpperCase();
  const arrayRomans = romanCapital.split('');

  if (!isValidChar(arrayRomans)) {
    throw new Error('Unknown roman numeral');
  }
  if (!isValidLetters(arrayRomans)) {
    throw new Error(`Invalid repetition of number starting with 5: ${letterMesagge(errorLetter[0])}`);
  }

  if (!isValidRepetition(romanCapital)) {
    throw new Error(`Too many repetitions of roman numeral ${errorLetter[0]}`);
  }
  if (!isValidSubstraction(romanCapital)) {
    throw new Error(`Invalid substraction prefix ${errorLetter[0]}`);
  }
  if (!isValidPosition(romanCapital)) {
    throw new Error('Invalid order');
  }
  return letterConvertion(arrayRomans);
};
