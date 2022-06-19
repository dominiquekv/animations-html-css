var value = [5, 8, 10, 22, 38, 45, 60, 90, 102, 118];

function busca(num) {
    for (i = 0; i < 6; i++) {
        if (num == value[i]) {
            return i;
        }
    }
    return -1;

}

function buscaBin(num) {
    let start, end;
    let middle;
    let steps = 0;
    start = 0;
    end = 9;

    while (start <= end) {
        middle = parseInt((start + end) / 2);
        steps = steps + 1;

        if (num == value[middle]) {
            console.log("Encontrei em " + steps + " passos.");
            return middle;
        } else {
            if (num > value[middle]) {
                start = middle + 1;
            } else {
                end = middle - 1;
            }
        }
    }
    console.log("Não encontrei em " + steps + " passos.");
    return -1;
}

console.log(buscaBin(10));
console.log(buscaBin(50));
console.log(buscaBin(60));