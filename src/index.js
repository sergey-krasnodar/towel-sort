
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix === [] || matrix.length === 0) {
    return [];
  }
  return matrix.map((item, index) => index % 2 === 0 ? item : item.reverse()).reduce((acc, rec) => acc.concat(rec));
  };

