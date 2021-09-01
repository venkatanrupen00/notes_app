const printOddNumbers = (n) => {
    for (i = 0; i <= n; i++){
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}

printOddNumbers(10);

module.exports = {
    printOddNumbers
}






