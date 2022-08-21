import { Express } from 'express';
import routes from './src/routes';
const express = require('express');
const bodyParser = require('body-parser');
const app: Express = express();
app.use(bodyParser.json());
routes(app);
app.listen(10000);
