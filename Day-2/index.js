const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');
//let passingPasswords = 0;
let passed = 0;
for (let i = 0; i < input.length; i++) {
  const n = input[i].split(' ');
  const constraint = n[0].split('-').map((el) => {
    let cons = Number(el);
    return cons;
  });
  const key = n[1].slice(0, 1);
  const password = n[2];
  if (
    (password[constraint[0] - 1] === key && password[constraint[1] - 1] !== key) ||
    (password[constraint[0] - 1] !== key && password[constraint[1] - 1] === key)
  ) {
    console.log(key, password, constraint);
    passed = passed + 1;
  }

  console.log(passed);
}
