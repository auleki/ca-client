import { customAlphabet } from 'nanoid'

export const generateId = () => {
    const values = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-'
    const vuid = customAlphabet(values, 19)
    return vuid()
}