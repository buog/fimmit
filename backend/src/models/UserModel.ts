import mongoose, { Schema } from 'mongoose';
import logging from '../config/logging';
import IUser from '../interfaces/IUser';

const UserSchema: Schema = new Schema({
    token: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: false,
    },
    fullname: {
        type: String,
        required: true,
    },
});

UserSchema.post<IUser>('save', function () {
    logging.info('Mongo', 'Checkout the book we just saved: ', this);
});

export default mongoose.model<IUser>('User', UserSchema);