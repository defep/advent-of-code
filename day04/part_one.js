'use strict'

const fs = require('fs')

const fileData = fs.readFileSync('input.txt', 'utf-8')

const passports = fileData.split(/\s\r\n/)

// console.log(passports)

let fmtPassports = passports
    .map(p => p.replace(/\r?\n/gm, ' '))
    .map(p => p.replace(/\n|\r\n/gm, ' '))

let validPassportCount = 0

fmtPassports.forEach(p => {
    const fields = []
    p.split(' ').forEach(el => {
        fields.push(el.split(':'))
    })

    if (fields.length === 8) {
        // console.log(fields[0].indexOf('cid'))
        const validFields = ['ecl', 'pid', 'eyr', 'hcl', 'iyr', 'byr', 'hgt', 'cid']

        let isValid = true
        fields.forEach(e => {
            if (e[0].includes(validFields) === -1) {
                isValid = false
            }

        })

        isValid ? validPassportCount++ : false
    }

    if (fields.length === 7) {
        let isValid = true
        fields.forEach(e => {

            if (e[0] === 'cid') {
                isValid = false
            }

        })

        isValid ? validPassportCount++ : false

    }
})

console.log(validPassportCount)