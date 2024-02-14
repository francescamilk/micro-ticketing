import mongoose from 'mongoose';
import { Password } from '../helpers/password';

interface UserAttrs {
    email: string;
    password: string;
    createdAt?: string;
    updatedAt?: string;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }   
});

// Middleware callback
// use 'function' notation for 'this' to reference user doc
// close with 'done()' as mongo doesnt have built in async
userSchema.pre('save', async function(done) {
    if (this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
    }
    done();
});

// (REF): refactor as User.build
// Override default constructor to plug TS
const buildUser = (attrs: UserAttrs) => {
    return new User(attrs);
}

// NEW CONSTRUCTOR //
// const user = buildUser({ email: 'ef@milk.com', password: 'secret' })

const User = mongoose.model('User', userSchema);
export { User, buildUser };