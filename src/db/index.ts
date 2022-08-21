import HttpStatus from '@/common/HttpStatus';
import type { Pool } from 'pg';
import TTablesType, { ETables } from './type';
const pg = require('pg');

const pool: Pool = new pg.Pool({
  user: 'rava',
  host: 'localhost',
  database: 'ravadb',
  password: 'rava',
  port: 5432
});

// 初始化表
pool.query(`
CREATE TABLE IF NOT EXISTS public."users"
(
    user_id character varying(16) NOT NULL,
    user_name character varying(16) NOT NULL DEFAULT '',
    user_gold integer NOT NULL DEFAULT 0,
    sign_in_count smallint NOT NULL DEFAULT 1,
    sign_in_date date NOT NULL DEFAULT NOW(),
    CONSTRAINT users_pkey PRIMARY KEY (user_id)
)`);

export interface ISelectConfig {
  fields?: string[];
  from: ETables;
  where?: string
}
/**
 * @description 查询
 */
export async function Select(config: ISelectConfig) {
  const { fields, from, where } = config;
  const { rows } = await pool.query(`
    SELECT ${fields ? fields.join(',') : '*'} 
    FROM ${from} 
    ${where ? `WHERE ${where}` : ''}
  `);
  return rows as (TTablesType[typeof from])[];
}

type TInsertConfigData = { [name: string]: string | number };
interface IInsertConfig {
  from: ETables;
  data: TInsertConfigData | Array<TInsertConfigData>
}
/**
 * @description 插入
 */
export async function Insert(config: IInsertConfig): Promise<void> {
  const { from, data: tempData } = config;
  const data = Array.isArray(tempData) ? tempData : [tempData];

  const fields = Object.keys(data[0]).join(',');
  const values = data.map(item => `(${Object.values(item).map(v => typeof v === 'string' ? `'${v}'` : v).join(',')})`).join(',');

  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await client.query(`
    INSERT INTO ${from}
    (${fields})
    VALUES
    (${values})
    `);
    await client.query('COMMIT');
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
}

export interface IDeleteConfig {
  from: ETables;
  where: string
}
/**
 * @description 删除
 */
export async function Delete(config: IDeleteConfig): Promise<void> {
  const { from, where } = config;

  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await client.query(`
    DELETE FROM ${from}
    WHERE ${where}
    `);
    await client.query('COMMIT');
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
}

type TUpdateConfigData = { [name: string]: string | number };
interface IUpdateConfig {
  from: ETables;
  where: string;
  data?: TUpdateConfigData;
  rowData?: string
}
/**
 * @description 更新
 */
export async function Update(config: IUpdateConfig): Promise<void> {
  const { from, where, data: tempData = {}, rowData = '' } = config;
  const data = Object.entries(tempData).map(([key, value]) => `${key}=${typeof value === 'string' ? `'${value}'` : value}`).join(',');
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const { rowCount } = await client.query(`
    UPDATE ${from}
    SET ${rowData || data}
    WHERE ${where}
    `);
    if (!rowCount) throw HttpStatus.Not_Found;
    await client.query('COMMIT');
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
}
