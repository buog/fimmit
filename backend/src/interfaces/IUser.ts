import { Document } from 'mongoose';

export default interface IUser extends Document {
    token: string;
    email: string;
    username: string;
    fullname: string;
}