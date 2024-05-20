import mongoose from 'mongoose';
const MONGODB_URI = 'mongodb://localhost:27017/GameGalaxy';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch((error) => {
    console.error('Error de conexión a MongoDB:', error);
  });

export default mongoose.connection;

