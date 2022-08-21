import HttpStatus from '@/common/HttpStatus';
import { Delete, Insert, Select, Update } from '@/db';
import { ETables, ITableUsersRow } from '@/db/type';
import { Router } from 'express';
const router: Router = require('express-promise-router')();

function getUsers() {
  return Select({ from: ETables.users });
}

function getUser(id: string) {
  return Select({ from: ETables.users, where: `user_id like '${id}'` });
}

function postUser(id: string) {
  const data: Pick<ITableUsersRow, 'user_id'> = { user_id: id };
  return Insert({ from: ETables.users, data });
}

function deleteUser(id: string) {
  return Delete({ from: ETables.users, where: `user_id like '${id}'` });
}

async function patchUserSignIn(id: string) {
  const rows = await getUser(id);
  // 如果已签到过，则停止重复签到
  if (rows[0]?.sign_in_date && new Date(rows[0].sign_in_date).getDate() === new Date().getDate()) return;
  await Update({ from: ETables.users, where: `user_id like '${id}'`, rowData: 'sign_in_count = sign_in_count + 1, sign_in_date = NOW()' });
}

router.route('/')
  // 账号列表
  .get(async (req, res) => {
    const rows = await getUsers();
    res.status(HttpStatus.OK).json(rows);
  });

router.route('/:id')
  // 账号查询
  .get(async (req, res) => {
    const { params: { id } } = req;
    const rows = await getUser(id);
    res.status(HttpStatus.OK).json(rows);
  })
  // 账号创建
  .post(async (req, res) => {
    const { params: { id } } = req;
    await postUser(id);
    res.status(HttpStatus.Created).end();
  })
  // 账号删除
  .delete(async (req, res) => {
    const { params: { id } } = req;
    await deleteUser(id);
    res.status(HttpStatus.No_Content).end();
  });

router.route('/sign-in')
  // 签到
  .patch(async (req, res) => {
    const id: string = req.body?.id;
    if (!id) throw HttpStatus.Bad_Request;
    await patchUserSignIn(id);
    res.status(HttpStatus.OK).end();
  });
export default router;
