import HttpStatus from '@/common/HttpStatus';
import { Router } from 'express';
const router: Router = require('express-promise-router')();
router.route('/')
  // 账号列表
  .get(async (req, res) => {
    res.status(HttpStatus.OK).end();
  });

export default router;
