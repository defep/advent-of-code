const fs = require('fs')

let data = fs.readFileSync('day-03-input.txt', 'utf-8')

const newLineRegex = /\r?\n/
const rows = data.split(newLineRegex)


const slopes = [1, 3, 7]

const result = slopes.map(e => {
    const rightSteps = e
    let rightPos = 0
    let rowNumber = 1
    let trees = 0

    for (const row of rows) {
        let col = row.split('')

        if (rowNumber === 1) {
            rowNumber++
            continue
        }

        rightPos += rightSteps

        while (typeof col[rightPos] === 'undefined') {
            col = col.concat(col)
        }

        trees += col[rightPos] === '#' ? 1 : 0
        rowNumber++
    }

    return trees
})

console.log(result)



