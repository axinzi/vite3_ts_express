import { Router } from 'express';
const router: Router = require('express-promise-router')();

router.route('/')
  .get(async (req, res) => {
    const data = {
      message: 'hi qq'
    };
    res.status(200).json(data);
  });

router.route('/:userId')
  .get(async (req, res) => {
    const { params: { userId } } = req;
    const data = {
      userId
    };
    res.status(200).json(data);
  });

export default router;
