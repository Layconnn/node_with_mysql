import express from 'express';
import cors from 'cors';
import pool from './db';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello, World!');
});

// app.get('/books', async (req: express.Request, res: express.Response) => {
//    try{
//     const connection = await pool
//     const [rows] = await connection.query('SELECT * FROM the_books')
//     res.json(rows)
//     console.log(rows)
//     } catch(err){
//         console.error('Error making connection:', err)
//         res.status(500).send('Internal Server Error')
//     }
// })

pool.connect((err: Error | null) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});