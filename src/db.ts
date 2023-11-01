import mysql from 'mysql';

const pool = mysql.createConnection({
  host: 'localhost',
  database: '',
  user: 'root',
  password: 'root',
});

export default pool;
