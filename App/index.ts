import express from 'express';
const app: express.Application = express();
import serverConfigurations from './server-basic-configurations';

app.use((req,res,next) => {
    console.log('>>> New request recieved');
})

app.listen(serverConfigurations.port, () => {
    console.log('>>> App is listening on port 3000!');
});