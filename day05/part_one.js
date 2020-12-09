'use strict'
const readFile = require('fs').readFileSync

const fileData = readFile('input.txt', 'utf-8').split(/\r?\n/g)

const seats = fileData.map(seats => {
    return seats.split('')
})

const defineSeatRow = (char, value) => {
    let [min, max] = value

    if (char === 'F') {
        // lower half
        max = Math.floor((min + max) / 2)
        return [min, max]

    }

    if (char === 'B') {
        min = Math.ceil((min + max) / 2)
        // upper half
        return [min, max]
    }
}

const defineSeatCol = (char, value) => {
    let [min, max] = value

    if (char === 'L') {
        // lower half
        max = Math.floor((min + max) / 2)
        return [min, max]

    }

    if (char === 'R') {
        min = Math.ceil((min + max) / 2)
        // upper half
        return [min, max]
    }
}

let seatIds = []
seats.forEach(seat => {
    let seatRowRange = [0, 127]
    let seatColRange = [0, 7]
    seat.forEach((char, i) => {

        if (i >= 0 && i <= 6) {
            seatRowRange = defineSeatRow(char, seatRowRange)
        } else {
            seatColRange = defineSeatCol(char, seatColRange)
        }
    })

    // console.log({ row: seatRowRange.reduce(n => n), col: seatColRange.reduce(n => n) })
    seatIds.push(seatRowRange.reduce(n => n) * 8 + seatColRange.reduce(n => n))
})

console.log(seatIds.reduce((prev, cur) => (prev > cur) ? prev : cur))
