// const checkPassword = (data) => {
//   const n = data.cons.split('-');
//   for (var i = 0; i < n.length; i++) n[i] = +n[i];
//   const key = data.key;
//   const password = data.password;

//   let count = 0;
//   for (i = 0; i < password.length; i++) {
//     if (key == password[i]) {
//       count++;
//     }
//   }

//   if(count >= n[0] && count <= n[1]){
//     return 'Password is valid!'
//   } else {
//     return 'Password is not valid!'
//   }

// };

// console.log(checkPassword(inputs))

const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');
let passingPasswords = 0;
for (let i = 0; i < input.length; i++) {
  const n = input[i].split(' ');
  const constraint = n[0].split('-').map((el) => {
    let cons = Number(el);
    return cons;
  });
  const key = n[1].slice(0, 1);
  const password = n[2];
  let count = 0;

  for (let j = 0; j < password.length; j++) {
    if (password[j] === key) {
      count++;
    }
  }

  if (count >= constraint[0] && count <= constraint[1]) {
    console.log(`${password} with a key of ${key} - Password is accepted`);
    passingPasswords++;
  } else {
    console.log(`${password} with a key of ${key} - Password is not accepted`);
  }

  console.log(passingPasswords);
}

// var fs = require('fs'),
//   readline = require('readline');

// var rd = readline.createInterface({
//   input: fs.createReadStream('input.txt'),
//   console: false,
// });

// rd.on('line', function (line) {
//   const policy = line.split(' ');
//   const n = policy[0];
//   const key = policy[1].length;
//   const password = policy[2];
//   console.log(typeof n, typeof key, typeof password);
// });
