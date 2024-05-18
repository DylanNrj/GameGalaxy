import express from 'express';
import db from './config/db';
import gamesRouter from './routes/gamesroutes';
import reviewsRouter from './routes/reviewsroutes';
import usersRouter from './routes/usersroutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/games', gamesRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/users', usersRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Games API');
});

db.once('open', () => {
  console.log('Conectado a MongoDB. Iniciando servidor Express...');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

db.on('error', (error) => {
  console.error('Error de conexión a MongoDB:', error);
});
