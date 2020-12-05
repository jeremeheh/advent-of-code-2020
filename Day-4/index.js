const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8').split('\n\n');

let validPassports = 0;
let invalidPassports = 0;

console.log(input);

const validFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

input.map((passport) => {
  console.log(passport.split('\n'));
});

// required fields
// byr (Birth Year)
// iyr (Issue Year)
// eyr (Expiration Year)
// hgt (Height)
// hcl (Hair Color)
// ecl (Eye Color)
// pid (Passport ID)
// cid (Country ID) //optional
