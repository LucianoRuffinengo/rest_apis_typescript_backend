import { connectDB } from '../server'
import db from '../config/db'

jest.mock('../config/db')

describe('connectDB', () => {
    it('should handle database connection error', async () => {
        jest.spyOn(db, 'authenticate')
            .mockRejectedValueOnce(new Error('Hubo un error al conectar a la BDD'))
        const consoleSpy = jest.spyOn(console, 'log')

        await connectDB()

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining('Hubo un error al conectar a la BDD')
        )
    })
})

































// describe('Nuestro primer test', () => {
//     /*puede ser it o test*/
//     it('Debe revisar que 1 + 1 sean 2', () => {
//         expect(1 + 1).toBe(2)
//     })
//     it('Debe revisar que 1 + 1 no sean 3', () => {
//         expect(1 + 1).not.toBe(3)
//     })
// })