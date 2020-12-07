const fs = require('fs')

const regex = /(\d+)-(\d+)\s([a-z]):\s([a-z]+)/

fs.readFile('day-02-input.txt', 'utf8', (err, data) => {
    if (err) throw err;

    const input = data.split('\n')

    /*
    const validPasswords = input.filter(val => {
        const [fullString, min, max, char, password] = val.match(regex)
        const result = password.match(new RegExp(char, 'g')) || [];
        charCount = result.length

        return charCount >= min && charCount <= max
    });

    console.log(validPasswords.length) // part 1
    */


    // part 2

    const validPasswords = input.filter(val => {
        const [fullString, firstPosition, lastPosition, char, password] = val.match(regex)

        firstChar = password[firstPosition - 1]
        lastChar = password[lastPosition - 1]

        return (firstChar === char && lastChar !== char) || (firstChar !== char && lastChar === char)
        // return charCount >= min && charCount <= max
    });

    console.log(validPasswords.length) // part 2

});

