// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    matrix.map((el, ind) => {
        el = ind % 2 ? el.reverse() : el;
    });
    return matrix.flat();
};
