'use strict'

const readFile = require('fs').readFileSync

const lines = readFile('input.txt', 'utf-8').split(/\r?\n/)

const numbers = lines.map(number => parseInt(number))

let firstFalseNumber = false

const sumLast = 25

numbers.forEach((number, i) => {
    let counter = i
    if (i < sumLast || firstFalseNumber) return

    const sumGroup = []
    for (let j = i - sumLast; j < i; j++) {
        counter--
        sumGroup.push(numbers[j])
    }

    let isValid = false
    sumGroup.map(n => {
        for (let i = 0; i < sumGroup.length; i++) {
            if (n + sumGroup[i] === number) {
                isValid = true
                break
            }
        }
    })

    if (!isValid) {
        console.log(number)
        firstFalseNumber = true
    }
})
