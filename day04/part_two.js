'use strict'

const readFile = require('fs').readFileSync

const fileData = readFile('input.txt', 'utf-8')

const rawPassports = fileData.split(/\s\r\n/)

let fmtPassports = rawPassports
    .map(p => p.replace(/\r?\n/gm, ' '))
    .map(p => p.replace(/\n|\r\n/gm, ' '))
    .map(p => p.replace(/\r/g, ''))

const isValidBetween = (val, min, max) => {
    val = parseInt(val)
    return val >= min && val <= max ? true : false
}

const isHclValid = val => /^\#[0-9a-f]{6}$/.test(val)

const isHgtValid = val => {
    let [, height, unit] = val.match(/^(\d+)(cm|in)$/) || []
    if (typeof height === 'undefined') return false

    height = parseInt(height)

    if (unit === 'cm' && (height >= 150 && height <= 193)) return true

    if (unit === 'in' && (height >= 59 && height <= 76)) return true

    return false
}


const isEclValid = val => {
    const valid = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
    return valid.includes(val)
}

const isPidValid = val => /^\d{9}$/.test(val)

const countValidPassports = passports => {
    let validPassportCount = 0
    passports.forEach(passport => {
        if (
            typeof passport.byr === 'undefined' ||
            typeof passport.iyr === 'undefined' ||
            typeof passport.eyr === 'undefined' ||
            typeof passport.hgt === 'undefined' ||
            typeof passport.hcl === 'undefined' ||
            typeof passport.ecl === 'undefined' ||
            typeof passport.pid === 'undefined'
        ) {
            return
        }

        if (!isValidBetween(passport.byr, 1920, 2002)) return // 2
        if (!isValidBetween(passport.iyr, 2010, 2020)) return // 2
        if (!isValidBetween(passport.eyr, 2020, 2030)) return // 2
        if (!isHclValid(passport.hcl)) return // 2
        if (!isHgtValid(passport.hgt)) return // 3
        if (!isEclValid(passport.ecl)) return // 2
        if (!isPidValid(passport.pid)) return // 3

        validPassportCount++
    })

    return validPassportCount
}

const passports = []
fmtPassports.forEach((p, i) => {
    const fields = []
    const passport = {}
    p.split(' ').forEach(el => {

        el = el.replace(/\r/g, '')
        let f = el.split(' ')
        f.forEach(e => {
            e = e.split(':')
            passport[e[0]] = e[1]

        })
        fields.push(el.split(':'))
    })
    passports.push(passport)
})

console.log(countValidPassports(passports))
