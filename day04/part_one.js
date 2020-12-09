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

    if (fields.length === 8 || fields.length === 7) {
        const validFields = ['ecl', 'pid', 'eyr', 'hcl', 'iyr', 'byr', 'hgt', 'cid']

        let isValid = true
        fields.forEach(e => {
            if (e[0] === 'cid' && fields.length === 7) {
                isValid = false
                return
            }

            if (e[0].includes(validFields) === -1) {
                isValid = false
            }

        })

        isValid ? validPassportCount++ : false
    }
})

console.log(validPassportCount)