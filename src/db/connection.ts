import { Pool } from 'pg';

const db = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'windfarms',
  password: 'password',
  port: 5432,
});

export default db;