import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

export class Password {
    static async toHash(psw: string) {
        const salt =  randomBytes(8).toString('hex');
        const buffer = (await scryptAsync(psw, salt, 64)) as Buffer;

        return `${buffer.toString('hex')}.${salt}`;
    }
    
    static compare(storedPsw: string, providedPsw: string) {
        
    }
}