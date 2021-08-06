const numbers = [
  {
    roman: 'M',
    arabic: 1000,
  },
  {
    roman: 'CM',
    arabic: 900,
  },
  {
    roman: 'D',
    arabic: 500,
  },
  {
    roman: 'CD',
    arabic: 400,
  },
  {
    roman: 'C',
    arabic: 100,
  },
  {
    roman: 'XC',
    arabic: 90,
  },
  {
    roman: 'L',
    arabic: 50,
  },
  {
    roman: 'XL',
    arabic: 40,
  },
  {
    roman: 'X',
    arabic: 10,
  },
  {
    roman: 'IX',
    arabic: 9,
  },
  {
    roman: 'V',
    arabic: 5,
  },
  {
    roman: 'IV',
    arabic: 4,
  },
  {
    roman: 'I',
    arabic: 1,
  },
];

const convertRoman = (number) => {
  let result = number;
  let romanNumber = '';
  while (result > 0) {
    const filter = numbers.filter((n) => n.arabic <= result)[0];
    result -= filter.arabic;
    romanNumber += filter.roman;
  }

  return romanNumber;
};

module.exports = {
  convertRoman,
};
