'use strict'

const fs = require('fs')

let data = fs.readFileSync('input.txt', 'utf-8')

const newLineRegex = /\r?\n/
const rows = data.split(newLineRegex)

const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]

const result = slopes.map(e => {
    const rightSteps = e[0]
    const downSteps = e[1]
    let curDownSteps = downSteps;
    let rightPos = 0
    let rowNumber = 0
    let treeCount = 0

    for (const row of rows) {
        let col = row.split('')

        if (rowNumber === 0) {
            rowNumber++
            continue
        }

        if (rowNumber < curDownSteps) {
            rowNumber++
            continue
        }

        rightPos += rightSteps

        while (typeof col[rightPos] === 'undefined') {
            col = col.concat(col)

        }
        curDownSteps += downSteps

        treeCount += col[rightPos] === '#' ? 1 : 0
        rowNumber++
    }

    return treeCount
})

const multiplyResult = result.reduce((acc, cur) => acc * cur)
console.log(multiplyResult)
