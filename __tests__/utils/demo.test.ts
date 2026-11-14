import { describe, expect, test, vi } from 'vitest'
import { sayGoodbye, sayHello } from '../../src/utils/demo'

describe('demo', () => {
    test('sayHello logs hi', () => {
        const log = vi.spyOn(console, 'log').mockImplementation(() => {})
        sayHello()
        expect(log).toHaveBeenCalledWith('hi')
        log.mockRestore()
    })

    test('sayGoodbye logs goodbye', () => {
        const log = vi.spyOn(console, 'log').mockImplementation(() => {})
        sayGoodbye()
        expect(log).toHaveBeenCalledWith('goodbye')
        log.mockRestore()
    })
})
