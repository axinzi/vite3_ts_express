import { Router } from 'express';
const router: Router = require('express-promise-router')();

router.route('/')
  .get(async (req, res) => {
    res.status(200).json('hello home');
  });
export default router;
