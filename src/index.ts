import express from 'express';
import userRouter from './users/users';

const app = express();
app.use(express.json());

app.use(userRouter);

app.get('/', (req, res) => {
  res.send('API rodando!');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});