import mongoose from 'mongoose';
import configurations from '../../server-basic-configurations';

export default async() => {
    console.log(configurations.mongoUrl);
    await mongoose.connect(configurations.mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});
}