import Calculator from "../code/calculator"

describe('calculator',()=>{
    let calculator

    beforeEach(function(){
        calculator=new Calculator()
    })

    test('add numbers', ()=>{
        expect(calculator.add(1,2)).toEqual(3)
    })

    test('subtract numbers', ()=>{
        expect(calculator.sub(2,1)).toEqual(1)
    })

    test('multiply numbers', ()=>{
        expect(calculator.mul(2,1)).toEqual(2)
    })

    test('divide numbers', ()=>{
        expect(calculator.div(2,1)).toBeCloseTo(2)
    })

    test('add undifined', ()=>{
        expect(calculator.add()).toBe(NaN)
    })

    test('subtract undifined', ()=>{
        expect(calculator.sub()).toBe(NaN)
    })

    test('multiply undifined', ()=>{
        expect(calculator.mul()).toBe(NaN)
    })

    test('divide undifined', ()=>{
        expect(calculator.div()).toBe(NaN)
    })
})