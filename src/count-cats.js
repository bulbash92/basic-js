module.exports = function countCats(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let y = 0; y < matrix[i].length; y++) {
      if (matrix[i][y] === "^^") {
        count += 1;
      } 
    } 
  } return count;
};
