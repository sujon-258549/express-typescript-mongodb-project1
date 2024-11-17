import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRouter } from './app/config/module/student/student.router';
const app: Application = express();
// const port = 3000

app.use(express.json());
app.use(cors());

app.use('/api/v1/student', studentRouter);

app.get('/', (req: Request, res: Response) => {
  let a = 10;
  res.send(a);
});

export default app;
