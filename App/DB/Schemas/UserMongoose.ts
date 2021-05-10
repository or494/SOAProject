import mongoose, {Schema} from 'mongoose';
import User from '../../Models/User';

const UserMongoose = new Schema({
    'username': {type: String, required: true},
    'password': {type: String, required: true},
    'friends': Array
});

export default mongoose.model<User>('User', UserMongoose);