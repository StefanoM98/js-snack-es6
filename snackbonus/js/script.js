const number = [10, 20, 48, 67, 59, 29, 5];

const arrayFiltrato = filterArray (number, 2, 4)
console.log(arrayFiltrato);

function filterArray(array, a, b) {
    return array.filter((val, index) => index >= a && index <= b);
};

