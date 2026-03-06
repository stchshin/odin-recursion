function fibs(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        if (i == 0) {
            result.push(0);
        } else if (i == 1) {
            result.push(1);
        } else {
            result.push(result[i - 2] + result[i - 1]);
        }
    }
    return result;
}

function fibsRec(n) {
    function recursion(num) {
        if (num == 1) {
            return 0;
        } else if (num == 2) {
            return 1;
        } else {
            return (recursion(num - 2) + recursion(num - 1));
        }
    }
    let results = [];
    for (let i = 1; i < n + 1; i++) {
        results.push(recursion(i))
    }
    return results;
}
