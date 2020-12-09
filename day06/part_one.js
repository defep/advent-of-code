'use strict'

const readFile = require('fs').readFileSync

const fileData = readFile('input.txt', 'utf-8').split(/\r?\n/g)

const answers = []
let groupChars = []
fileData.map((e, i) => {
    for (let char of e) {
        if (!groupChars.includes(char)) {
            groupChars.push(char)
        }
    }

    if (e === '' || i === fileData.length - 1) {
        answers.push(groupChars)
        groupChars = []
    }
})

const result = answers.map(e => e.map(e => 1)
    .reduce((prev, cur) => parseInt(prev) + parseInt(cur)))
    .reduce((prev, cur) => prev + cur)

console.log(result)