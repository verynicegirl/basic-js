const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * xx([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

let backyard = [
   [0, 1, '^^'],
   [0, '^^', 2],
   ['^^', 1, 2],
 ]

function countCats(backyard) {
  let numberOfCats = 0;
  let columnCount = backyard[0].length;
  let cat = "^^";

  if (backyard.length === 0){
    return 0;
  }
  for (let i = 0;i < backyard.length; i++){
    for (let j =0; j < columnCount; j++){
      if (backyard[i][j]=== cat){
        numberOfCats++;
      }
    }
    return numberOfCats;
  }

}

countCats(backyard);

