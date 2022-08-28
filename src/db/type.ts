export enum ETables {
  users = 'users',
}
export interface ITableUsersRow extends Record<string, string | number> {
  user_id: string;
  user_name: string;
  user_gold: number;
  sign_in_count: number;
  sign_in_date: string;
}

type TTablesType = {
  [ETables.users]: ITableUsersRow
}
export default TTablesType;
