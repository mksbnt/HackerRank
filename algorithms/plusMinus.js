function plusMinus(arr) {
    let positives = 0,
        negatives = 0,
        zeroes = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positives++;
        } else if (arr[i] < 0) {
            negatives++;
        } else if (arr[i] == 0) {
            zeroes++;
        }
    }

    let calculate = (x) => {
            return (x / arr.length).toFixed(6);
        },
        result = `${calculate(positives)}
${calculate(negatives)}
${calculate(zeroes)}`;

    return console.log(result);
}
