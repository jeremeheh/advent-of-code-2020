const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n\n');

const validateHeight = (hgt) => {
  // If cm, the number must be at least 150 and at most 193.
  // If in, the number must be at least 59 and at most 76.
  if (hgt.includes('cm')) {
    const heightInCM = Number(hgt.substring(0, hgt.length - 2));
    return heightInCM >= 150 && heightInCM <= 193;
  } else if (hgt.includes('in')) {
    const heightInIN = Number(hgt.substring(0, hgt.length - 2));
    return heightInIN >= 59 && heightInIN <= 76;
  }
  return false;
};

const validateHair = (hcl) => {
  const hash = hcl.substring(0, 1);
  const color = hcl.substring(1, hcl.length);
  if (hash === '#' && color.length === 6) {
    if (color.match(/[a-f0-9_.]\w/)) {
      return true;
    }
  }
  return false;
};

const validatePassportNumber = (pid) => {
  if (pid) {
    let n = pad(pid);
    console.log(n);
  }
};

// var s = String(this);
// while (s.length < (size || 2)) {s = "0" + s;}
// return s;

function pad(num, size = 9) {
  num = num.toString();
  while (num.length < size) num = '0' + num;
  return num;
}

const checkPassport = () => {
  let validPassport = 0;
  for (let i = 0; i < input.length; i++) {
    let obj = {};
    const passport = input[i].split(/\s+/);
    passport.forEach((field) => {
      const info = field.split(':');
      obj[info[0]] = info[1];
    });

    if (
      'byr' in obj &&
      'iyr' in obj &&
      'eyr' in obj &&
      'hgt' in obj &&
      'hcl' in obj &&
      'ecl' in obj &&
      'pid' in obj
    ) {
      // Number(obj['byr']);
      const byr = Number(obj['byr']);
      const byrCheck = byr.toString().length === 4 && byr >= 1920 && byr <= 2002;

      const iyr = Number(obj['iyr']);
      const iyrCheck = iyr.toString().length === 4 && iyr >= 2010 && iyr <= 2020;

      const eyr = Number(obj['eyr']);
      const eyrCheck = eyr.toString().length === 4 && eyr >= 2020 && eyr <= 2030;

      const hgt = obj['hgt'];
      const hgtCheck = validateHeight(hgt);

      const hcl = obj['hcl'];
      const hclCheck = validateHair(hcl);

      // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
      const ecl = obj['ecl'];
      const eclCheck =
        ecl === 'amb' ||
        ecl === 'blu' ||
        ecl === 'brn' ||
        ecl === 'gry' ||
        ecl === 'grn' ||
        ecl === 'hzl' ||
        ecl === 'oth';

      const pid = obj['pid'];
      const pidCheck = /^\d{9}$/.test(pid);

      console.log(byrCheck, iyrCheck, eyrCheck, hgtCheck, hclCheck, eclCheck, pidCheck);
      if (
        byrCheck &&
        iyrCheck &&
        eyrCheck &&
        hgtCheck &&
        hclCheck &&
        eclCheck &&
        pidCheck
      ) {
        validPassport++;
      }

      //console.log(byr, iyr, eyr, hgt, hcl, ecl, pid);
    }
  }
  console.log('The number is valid passports are:', validPassport);
};

checkPassport();
