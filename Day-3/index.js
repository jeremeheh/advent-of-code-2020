const fs = require('fs');
const input = fs.readFileSync('./problem-1.txt', 'utf-8').trim().split('\n');

function checkTrees(right, down = 1) {
  let treesEncountered = 0;
  let openSquare = 0;
  let index = right;

  for (let i = down; i < input.length; i = i + down) {
    if (input[i][index % input[i].length] === '#') {
      treesEncountered++;
      index = index + right;
    } else {
      openSquare++;
      index = index + right;
    }
  }

  console.log('trees encountered: ', treesEncountered);
  return treesEncountered;
  //console.log('open squares: ', openSquare);
}
const ans = [
  checkTrees(1),
  checkTrees(3),
  checkTrees(5),
  checkTrees(7),
  checkTrees(1, 2),
].reduce((total, currentVal) => total * currentVal);

console.log(ans);
// input.map((res) => {
//   if (res[index % res.length] === '#') {
//     treesEncountered++;
//   }
//   index = index + 3;
// });

//console.log(input);
// loop to every array of fields
// move from index 0 to index 2 and check the next array below it if its a tree (#)
// add it to encountered tree else add it to the open space
// loop back but now using the next array
