import { Document } from "mongoose";

export default interface User extends Document{
    username: string;
    password: string;
    friends: Array<User['_id']>;
}