'use strict'

const fs = require('fs')

const regex = /(\d+)-(\d+)\s([a-z]):\s([a-z]+)/

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) throw err;

    const input = data.split('\n')

    const validPasswords = input.filter(val => {
        const [fullString, firstPosition, lastPosition, char, password] = val.match(regex)

        let firstChar = password[firstPosition - 1]
        let lastChar = password[lastPosition - 1]

        return (firstChar === char && lastChar !== char) || (firstChar !== char && lastChar === char)
    });

    console.log(validPasswords.length)

});

