import type { Request, Response } from 'express';
import express from 'express';

const app = express();
const port = 80;

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
