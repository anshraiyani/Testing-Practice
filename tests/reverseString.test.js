import reverse from "../code/reverse"

describe('Reverse String',()=>{
    test('Reverse a String',()=>{
        expect(reverse('hello world')).toBe('dlrow olleh')
    })
    test('Reverse a character',()=>{
        expect(reverse('a')).toBe('a')
    })
    test('is Undefined',()=>{
        expect(reverse()).toBe('')
    })
    test('is null',()=>{
        expect(reverse(null)).toBe('')
    })
})