import mongoose from 'mongoose';
import { UserAttrs } from '../types/user-attrs';

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

const User = mongoose.model('User', userSchema);
// Override default constructor to plug TS
const buildUser = (attrs: UserAttrs) => {
    return new User(attrs);
}

export { User };