import express, { Application } from 'express';
import { enviromentConfig } from './config/enviromentConfig';

const app: Application = express();
const port = enviromentConfig.port;




app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
