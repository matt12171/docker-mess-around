import { Pool } from 'pg';

const db = new Pool({
  user: 'me',
  host: 'db',
  database: 'windfarms',
  password: 'password',
  port: 5432,
});

export default db;