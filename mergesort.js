function sortForMerge(array1, array2) {
    let result = [];
    let array1Count = 0;
    let array2Count = 0;
    while (true) {
        if (array1Count == array1.length && array2Count == array2.length) {
            break;
        } else if (array1Count == array1.length) {
            result = result.concat(array2.slice(array2Count));
            break;
        } else if (array2Count == array2.length) {
            result = result.concat(array1.slice(array1Count));
            break;
        } else if (array1[array1Count] < array2[array2Count]) {
            result.push(array1[array1Count]);
            array1Count++;
        } else {
            result.push(array2[array2Count]);
            array2Count++;
        }
    }
    return result;
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    } else {
        let firstHalf = mergeSort(array.slice(0, Math.floor(array.length / 2)));
        let secondHalf = mergeSort(array.slice(Math.floor(array.length / 2)));
        return sortForMerge(firstHalf, secondHalf);
    }
}
