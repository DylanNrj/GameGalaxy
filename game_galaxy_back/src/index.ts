import express from 'express';
import cors from 'cors';
import { MongoClient, Db } from 'mongodb';
import gamesRouter from './routes/gamesroutes';
import reviewsRouter from './routes/reviewsroutes';
import usersRouter from './routes/usersroutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/games', gamesRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/users', usersRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Games API');
});


async function createCollections(db: Db): Promise<void> {
  const collections = ['games', 'reviews', 'users'];

  for (const collectionName of collections) {
    try {
      await db.createCollection(collectionName);
      console.log(`Colección ${collectionName} creada`);
    } catch (error: any) {
      if (error.code === 48) {
        console.log(`La colección ${collectionName} ya existe`);
      } else {
        console.error(`Error creando la colección ${collectionName}:`, error);
      }
    }
  }
}

MongoClient.connect('mongodb://localhost:27017')
  .then(client => {
    const db = client.db('game_galaxy');
    createCollections(db).then(() => {
      console.log('Conectado a MongoDB. Iniciando servidor Express...');
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    }).catch(error => {
      console.error('Error al crear colecciones:', error);
    });
  })
  .catch(error => {
    console.error('Error de conexión a MongoDB:', error);
  });
