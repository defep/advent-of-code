const fs = require('fs')

const regex = /(\d+)-(\d+)\s([a-z]):\s([a-z]+)/

fs.readFile('day-02-input.txt', 'utf8', (err, data) => {
    if (err) throw err;

    const input = data.split('\n')
    const validPasswords = input.filter(val => {

        const [fullString, min, max, char, password] = val.match(regex)
        const result = password.match(new RegExp(char, 'g')) || [];
        charCount = result.length

        return charCount >= min && charCount <= max
    });

    console.log(validPasswords.length)
});