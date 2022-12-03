import express from 'express';
import 'dotenv/config';

import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
// import bookRoutes from './routes/books.route.js';
const app = express();
const port = process.env.PORT;

import './db/conn.js';

app.use(cors());
app.use(express.json());
app.use('/', authRoutes);
// app.use('/book', bookRoutes);

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
