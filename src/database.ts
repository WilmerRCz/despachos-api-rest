import { createPool } from 'mysql2/promise';

export async function connect() {
  const connection = await createPool({
    host: '162.240.218.191',
    user: 'dimaficl_admin',
    password: 'ni6Gb#I@8?pz',
    database: 'dimaficl_bdespachos',
    connectionLimit: 10
  })
  return connection;
}