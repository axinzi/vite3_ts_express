import { Express } from 'express';
import routes from './src/routes';
const express = require('express');
const app: Express = express();
routes(app);
app.listen(10000);
