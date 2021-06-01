import { rollDice } from './utils.js'

describe('rollDice', () => {
    test("it returns a number from 1-6", () => {
        const number = rollDice()
        expect(number).toBeGreaterThan(0)
        expect(number).toBeLessThan(7)
    })
    test("it returns all 6 numbers when called many times", () => {
        let usedNumbers = []
        for (let i = 0; i < 10000; i++) {
            const number = rollDice()
            if (!usedNumbers.find(item => item === number)) {
                usedNumbers.push(number)
            }
        }
        expect(usedNumbers.length).toBe(6)
    })
})