import HttpStatus from '@/common/HttpStatus';
import { Router } from 'express';
const router: Router = require('express-promise-router')();

router.route('/')
  .get(async (req, res) => {
    const data = {
      message: 'hi qq'
    };
    res.status(HttpStatus.OK).json(data);
  });

router.route('/:userId')
  .get(async (req, res) => {
    const { params: { userId } } = req;
    const data = {
      userId
    };
    res.status(HttpStatus.OK).json(data);
  });

export default router;
