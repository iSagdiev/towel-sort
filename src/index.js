
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (typeof matrix === 'undefined' || matrix === []) {
        return [];
    }
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
      let temArr = [];
        for (let j = 0; j < matrix[i].length; j++) {
          temArr.push(matrix[i][j]);
        }
        if (i%2 != 0) {
          temArr = temArr.sort((a,b) => a - b);
          temArr.reverse();
          arr = arr.concat(temArr);
    
        } else 
        arr = arr.concat(temArr.sort((a,b) => a - b))
    } 
    return(arr);
}
