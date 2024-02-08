import mongoose from 'mongoose';

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

// (REF): refactor as User.build
// Override default constructor to plug TS
const buildUser = (attrs: UserAttrs) => {
    return new User(attrs);
}

// NEW CONSTRUCTOR //
// const user = buildUser({ email: 'ef@milk.com', password: 'secret' })

const User = mongoose.model('User', userSchema);
export { User, buildUser };