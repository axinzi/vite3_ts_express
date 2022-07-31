import HttpStatus from '@/common/HttpStatus';
import { Router } from 'express';
const router: Router = require('express-promise-router')();

router.route('/')
  .get(async (req, res) => {
    res.status(HttpStatus.OK).json('hello home');
  });
export default router;
