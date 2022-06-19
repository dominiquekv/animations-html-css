var value = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function order() {
    let start = 0;
    let end = 10;
    let tmp;

    for (times = 0; times < 10; times++) {
        for (pos = start; pos < end - 1 - times; pos++) {
            if (value[pos] > value[pos + 1]) {
                tmp = value[pos]; // tmp recebe o valor atual
                value[pos] = value[pos + 1]; // o valor atual recebe o próximo (pos + 1)
                value[pos + 1] = tmp; // e o valor (pos + 1) recebe tmp
            }
        }
    }
}

order();
console.log("Vetor ordenado... ");
console.log(value);