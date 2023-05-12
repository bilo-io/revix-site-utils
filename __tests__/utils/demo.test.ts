import demo from '../../src/utils/demo'

describe('demo', () => {
    test('can run the demo test', () => {
        expect(demo('hello')).toBe('Demo log: hello')
    })
})