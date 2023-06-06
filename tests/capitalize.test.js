import capitalize from "../code/capitalize"

describe("Capitalize",()=>{
    test('capitalizes first char of a string',()=>{
        expect(capitalize('hello world')).toBe('Hello world')
    })
    test('capitalizes single character',()=>{
        expect(capitalize('h')).toBe('H')
    })
    test('is Undifined',()=>{
        expect(capitalize()).toBe('')
    })
    test('is Null',()=>{
        expect(capitalize(null)).toBe('')
    })
})