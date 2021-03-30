import { Hello, product } from './myFnc'

describe('Hello', () => {
    it('must console Hello', () => {
        expect(Hello()).toEqual('Hello')
    })
})

// unit testing product function by importing it

describe('product', () => {
    it('must return product', () => {
        let param1 = 20;
        let param2 = 30;
        expect(product(param1, param2)).toEqual(600)
    })
})


