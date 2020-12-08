const fs = require('fs')

let data = fs.readFileSync('input.txt', 'utf-8')

const newLineRegex = /\r?\n/
const rows = data.split(newLineRegex)

const rightSteps = 3
let rightPos = 0
let rowNumber = 0
let treeCount = 0

for (const row of rows) {
    let col = row.split('')

    if (rowNumber === 0) {
        rowNumber++
        continue
    }

    rightPos += rightSteps

    while (typeof col[rightPos] === 'undefined') {
        col = col.concat(col)
    }

    treeCount += col[rightPos] === '#' ? 1 : 0
    rowNumber++
}

console.log(treeCount)



