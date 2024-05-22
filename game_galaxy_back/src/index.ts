import express from 'express';
import cors from 'cors';
import { MongoClient, Db, Collection, ObjectId } from 'mongodb';
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

const initialData = {
  games: [
    {
      "_id": new ObjectId("66102e9ce5a28dd3abda9d76"),
      "name": "Elden Ring",
      "description": "Elden Ring es el nuevo videojuego de rol, aventura y acción de FromSoftware y Bandai Namco. Ideado por Hidetaka Miyazaki y George R.R. Martin, el escritor de Canción de hielo y fuego, nos llevará a un mundo convulso, complejo y sangriento. En esta ocasión",
      "release_date": "2022-02-22",
      "platform": "PlayStation 5, PlayStation 4, Xbox Series X y Series S, Xbox One, Microsoft Windows",
      "gender": "Videojuego de rol de acción, Videojuego de aventura, Videojuego de lucha, Videojuego de plataformas",
      "image_url": "https://i.pinimg.com/564x/7d/91/75/7d91755484dc5e8efea876a9e58e33d3.jpg",
      "rating": "4.5",
      "num_reviews": "4"
    },
    {
      "_id": new ObjectId("66102ee0e5a28dd3abda9d78"),
      "name": "Persona 5 Royal",
      "description": "Persona 5: Royal es la versión extendida y mejorada del exitoso videojuego del rol japonés producido por ATLUS para consolas. La quinta entrega tiene ahora una nueva edición que, si bien nos sigue contando una épica historia en la que un grupo de estudian",
      "release_date": "2019-10-31",
      "platform": "Nintendo Switch, PlayStation 5, PlayStation 4, Microsoft Windows, Xbox Series X y Series S",
      "gender": "J-rol, Videojuego de aventura",
      "image_url": "https://i.pinimg.com/564x/66/58/a3/6658a371128fcaf789204ce9ac7c4f3e.jpg",
      "rating": "4.5",
      "num_reviews": "2"
    },
    {
      "_id": new ObjectId("66102ef0e5a28dd3abda9d7a"),
      "name": "Red Dead Redemption 2",
      "description": "Red Dead Redemption 2 es la secuela del aclamado Red Dead Redemption de 2010 y tercera parte de la saga Red Dead, que se inició en 2004 con Red Dead Revolver. De nuevo nos lleva al salvaje oeste para proponernos convertirnos en un pistolero forajido en un",
      "release_date": "2018-10-26",
      "platform": "PlayStation 4, Xbox One, Google Stadia, Microsoft Windows",
      "gender": "Wéstern, Entretenimiento, MÁS",
      "image_url": "https://i.pinimg.com/564x/d2/a4/5c/d2a45cc2083abc8bf1c21e47e0b29c3a.jpg",
      "rating": "4.9",
      "num_reviews": "3"
    },
    {
      "_id": new ObjectId("66102f27e5a28dd3abda9d7c"),
      "name": "The Legend of Zelda: Tears of the Kingdom",
      "description": "The Legend of Zelda: Tears of the Kingdom es el nuevo videojuego para Nintendo Switch de la saga de juegos de The Legend of Zelda, secuela directa de Breath of the Wild. Protagonizada por Link, y con una jugabilidad basada en la acción y el rol en mundo a",
      "release_date": "2023-05-12",
      "platform": "Nintendo Switch",
      "gender": "Videojuego de lógica, Videojuego de acción y aventura, Videojuego de disparos, Videojuego de lucha",
      "image_url": "https://i.pinimg.com/564x/e0/08/87/e008871e4a503cb16ab780575401f5f7.jpg",
      "rating": "4.7",
      "num_reviews": "2"
    },
    {
      "_id": new ObjectId("66102f31e5a28dd3abda9d7e"),
      "name": "Baldur's Gate 3",
      "description": "Baldur's Gate 3 es la tercera parte de la emblemática saga de videojuegos de rol Baldur's Gate. Considerada como una de las series más influyentes de la historia, en esta ocasión, los encargados de darle vida son los desarrolladores de Larian Studios, cre",
      "release_date": "2023-08-03",
      "platform": "PlayStation 5, Xbox Series X y Series S, GeForce Now, Microsoft Windows, Mac OS",
      "gender": "Videojuego de rol, Videojuego de estrategia, Videojuego de aventura",
      "image_url": "https://i.pinimg.com/564x/71/bf/42/71bf4216ab757d32049f05c3b3f78973.jpg",
      "rating": "4.3",
      "num_reviews": "1"
    },
    {
      "_id": new ObjectId("66102f3ee5a28dd3abda9d80"),
      "name": "The Legend of Zelda: Breath of the Wild",
      "description": "The Legend of Zelda: Breath of the Wild es un videojuego exclusivo de Nintendo, desarrollado, producido y distribuido por la misma compañía, para las videoconsolas Wii U y Nintendo Switch.",
      "release_date": "2017-03-03",
      "platform": "Nintendo Switch, Wii U",
      "gender": "Videojuego de lógica, Videojuego de acción y aventura",
      "image_url": "https://i.pinimg.com/564x/69/3e/6a/693e6ae6e41c999d04fa93989593ee54.jpg",
      "rating": "4.9",
      "num_reviews": "5"
    },
    {
      "_id": new ObjectId("66102f4be5a28dd3abda9d82"),
      "name": "Super Mario Odyssey",
      "description": "Super Mario Odyssey es un videojuego desarrollado, producido y distribuido por Nintendo exclusivamente para su nueva videoconsola, Nintendo Switch.",
      "release_date": "2017-10-27",
      "platform": "Nintendo Switch",
      "gender": "Videojuego de plataformas, Videojuego de aventura, Videojuego de lucha",
      "image_url": "https://i.pinimg.com/564x/05/52/44/055244056241ead911cb2f5ad247558a.jpg",
      "rating": "4.7",
      "num_reviews": "1"
    },
    {
      _id: new ObjectId("66102f5ee5a28dd3abda9d84"),
      "name": "Super Smash Bros. Ultimate",
      "description": "Super Smash Bros. Ultimate es la nueva entrega para Nintendo Switch de la popular saga de Nintendo centrada en el género de lucha, en la que personajes como Super Mario, Zelda, Samus de Metroid, Donkey Kong o Pikachu de Pokémon por citar algunos, combaten",
      "release_date": "2018-12-07",
      "platform": "Nintendo Switch",
      "gender": "Videojuego de lucha, Videojuego de plataformas",
      "image_url": "https://i.pinimg.com/564x/06/7a/46/067a46ab11b63138ae2b1e415a21078a.jpg",
      "rating": "4.8",
      "num_reviews": "3"
    },
    {
      "_id": new ObjectId("66102f68e5a28dd3abda9d86"),
      "name": "The Last of Us Remasterizado",
      "description": "The Last of Us Remasterizado (The Last of Us Remastered) es una aventura de acción desarrollada por Naughty Dog y publicada por Sony Computer Entertainment para PlayStation 4. La obra maestra protagonizada por Joel y Ellie en su versión mejorada para PS4,",
      "release_date": "2014-07-29",
      "platform": "PlayStation 4",
      "gender": "Videojuego de aventura, Videojuego de disparos",
      "image_url": "https://i.pinimg.com/564x/52/1b/bb/521bbb4cbac70edf4e8709fd6396caa0.jpg",
      "rating": "4.3",
      "num_reviews": "1"
    },
    {
      "_id": new ObjectId("66102f71e5a28dd3abda9d88"),
      "name": "Grand Theft Auto V",
      "description": "Grand Theft Auto V para PS4 y Xbox One es una versión mejorada y ampliada del videojuego de acción en mundo abierto Grand Theft Auto V desarrollado por Rockstar lanzado en 2013. Esta versión del éxito, más ambiciosa técnicamente, presenta gráficos y nuevo",
      "release_date": "2013-09-07",
      "platform": "PlayStation 4, PlayStation 5, PlayStation 3, Xbox 360, Xbox One, Xbox Series X y Series S, Microsoft Windows",
      "gender": "Videojuego de acción y aventura, Videojuego de disparos en tercera persona, Videojuego no lineal",
      "image_url": "https://i.pinimg.com/564x/d2/55/ac/d255ac78bb40edc96076bb4c22a32504.jpg",
      "rating": "4.6",
      "num_reviews": "4"
    }
  ],
  reviews: [
    {
      "_id": new ObjectId("6649250ad4b9b25b391d434c"),
      "game": "Elden Ring",
      "user": "TheMoys",
      "rating": "4",
      "comment": "Increíble"
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d434d"),
      "game": "Elden Ring",
      "user": "Diegoza04",
      "rating": "4.3",
      "comment": "Waos"
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d434e"),
      "game": "Elden Ring",
      "user": "DylanNrj",
      "rating": "4.8",
      "comment": "Qué buen juego"
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d434f"),
      "game": "Elden Ring",
      "user": "andriuw08",
      "rating": "5",
      "comment": "Muy entretenido"
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4350"),
      "game": "Persona 5 Royal",
      "user": "TheMoys",
      "rating": "4.8",
      "comment": "Una experiencia de juego emocionante y llena de sorpresas."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4351"),
      "game": "Persona 5 Royal",
      "user": "Diegoza04",
      "rating": "4.5",
      "comment": "Los personajes son increíblemente profundos, y la trama es adictiva."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4352"),
      "game": "Persona 5 Royal",
      "user": "DylanNrj",
      "rating": "4.7",
      "comment": "Me encantó cada momento de este juego. Absolutamente asombroso."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4353"),
      "game": "Persona 5 Royal",
      "user": "andriuw08",
      "rating": "4.6",
      "comment": "La estética y la música son simplemente sublimes. Un juego que no se puede perder."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4354"),
      "game": "Red Dead Redemption 2",
      "user": "TheMoys",
      "rating": "4.9",
      "comment": "Una obra maestra en todos los aspectos. La historia es conmovedora y el mundo es vasto."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4355"),
      "game": "Red Dead Redemption 2",
      "user": "Diegoza04",
      "rating": "4.7",
      "comment": "Me enamoré de la inmersión y la atención al detalle. Rockstar hizo un trabajo increíble."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4356"),
      "game": "Red Dead Redemption 2",
      "user": "DylanNrj",
      "rating": "4.8",
      "comment": "Un juego que redefine las expectativas. Cada momento es memorable."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4357"),
      "game": "Red Dead Redemption 2",
      "user": "andriuw08",
      "rating": "4.6",
      "comment": "Una experiencia cinematográfica y emocionalmente potente. Bravo, Rockstar."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4358"),
      "game": "The Legend of Zelda: Tears of the Kingdom",
      "user": "TheMoys",
      "rating": "4.5",
      "comment": "Un viaje épico a través de un mundo mágico. Cada rincón es una maravilla visual."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4359"),
      "game": "The Legend of Zelda: Tears of the Kingdom",
      "user": "Diegoza04",
      "rating": "4.3",
      "comment": "Me sumergí por completo en la historia y la atmósfera. Una aventura inolvidable."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d435a"),
      "game": "The Legend of Zelda: Tears of the Kingdom",
      "user": "DylanNrj",
      "rating": "4.4",
      "comment": "Los puzles son desafiantes y gratificantes. Un juego que te absorbe por completo."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d435b"),
      "game": "The Legend of Zelda: Tears of the Kingdom",
      "user": "andriuw08",
      "rating": "4.6",
      "comment": "La música y el diseño de niveles son simplemente magistrales. Un verdadero tesoro."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d435c"),
      "game": "Baldur's Gate 3",
      "user": "TheMoys",
      "rating": "4.3",
      "comment": "Una experiencia de rol profunda y emocionante. No puedo esperar para jugar más."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d435d"),
      "game": "Baldur's Gate 3",
      "user": "Diegoza04",
      "rating": "4.1",
      "comment": "Me encanta la libertad y las decisiones significativas. Un RPG increíblemente inmersivo."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d435e"),
      "game": "Baldur's Gate 3",
      "user": "DylanNrj",
      "rating": "4.2",
      "comment": "El combate estratégico y la narrativa cautivadora hacen de este juego una joya."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d435f"),
      "game": "Baldur's Gate 3",
      "user": "andriuw08",
      "rating": "4.4",
      "comment": "Me siento completamente inmerso en este mundo. Un juego que supera las expectativas."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4360"),
      "game": "The Legend of Zelda: Breath of the Wild",
      "user": "TheMoys",
      "rating": "4.8",
      "comment": "Una obra maestra de la exploración y la libertad. Cada descubrimiento es emocionante."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4361"),
      "game": "The Legend of Zelda: Breath of the Wild",
      "user": "Diegoza04",
      "rating": "4.6",
      "comment": "Me perdí durante horas explorando este hermoso mundo. Un juego que deja una impresión duradera."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4362"),
      "game": "The Legend of Zelda: Breath of the Wild",
      "user": "DylanNrj",
      "rating": "4.7",
      "comment": "Los santuarios son desafiantes y gratificantes. Un juego que siempre ofrece algo nuevo."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4363"),
      "game": "The Legend of Zelda: Breath of the Wild",
      "user": "andriuw08",
      "rating": "4.5",
      "comment": "La física y la interacción con el entorno son simplemente asombrosas. Un juego que redefine el género."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4364"),
      "game": "Super Mario Odyssey",
      "user": "TheMoys",
      "rating": "4.5",
      "comment": "Un regreso glorioso a la forma clásica de Mario. La creatividad está en su punto más alto."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4365"),
      "game": "Super Mario Odyssey",
      "user": "Diegoza04",
      "rating": "4.3",
      "comment": "Me encanta la variedad de niveles y los secretos para descubrir. Un juego que nunca deja de sorprender."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4366"),
      "game": "Super Mario Odyssey",
      "user": "DylanNrj",
      "rating": "4.4",
      "comment": "Los controles son suaves y responsivos. La sonrisa no se borrará de tu rostro mientras juegas."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4367"),
      "game": "Super Mario Odyssey",
      "user": "andriuw08",
      "rating": "4.6",
      "comment": "Una delicia visual y auditiva. Nintendo ha vuelto a hacerlo con este título."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4368"),
      "game": "Super Smash Bros. Ultimate",
      "user": "TheMoys",
      "rating": "4.7",
      "comment": "Una celebración de la historia de los videojuegos. Cada personaje es un tributo a la diversión."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4369"),
      "game": "Super Smash Bros. Ultimate",
      "user": "Diegoza04",
      "rating": "4.5",
      "comment": "Los combates son emocionantes y siempre hay algo nuevo que descubrir. Un must-have para cualquier fan de los juegos."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d436a"),
      "game": "Super Smash Bros. Ultimate",
      "user": "DylanNrj",
      "rating": "4.6",
      "comment": "La cantidad de contenido es asombrosa. Nunca me canso de jugar con amigos."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d436b"),
      "game": "Super Smash Bros. Ultimate",
      "user": "andriuw08",
      "rating": "4.8",
      "comment": "Una experiencia multijugador brillante. Toneladas de contenido y personajes."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d436c"),
      "game": "The Last of Us Remastered",
      "user": "TheMoys",
      "rating": "4.9",
      "comment": "Una obra maestra del storytelling. La remasterización eleva aún más este clásico moderno."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d436d"),
      "game": "The Last of Us Remastered",
      "user": "Diegoza04",
      "rating": "4.7",
      "comment": "La conexión emocional con los personajes es increíble. Una experiencia que se queda contigo mucho después de haberla terminado."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d436e"),
      "game": "The Last of Us Remastered",
      "user": "DylanNrj",
      "rating": "4.8",
      "comment": "Los gráficos y la actuación son sobresalientes. Un juego que te deja sin aliento hasta el final."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d436f"),
      "game": "The Last of Us Remastered",
      "user": "andriuw08",
      "rating": "4.6",
      "comment": "Una narrativa envolvente y un gameplay emocionante. Una experiencia que merece ser vivida."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4370"),
      "game": "Grand Theft Auto V",
      "user": "TheMoys",
      "rating": "4.8",
      "comment": "Un mundo abierto vasto y lleno de vida. Las misiones y la diversión son interminables."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4371"),
      "game": "Grand Theft Auto V",
      "user": "Diegoza04",
      "rating": "4.6",
      "comment": "La historia es absorbente y los personajes son memorables. Rockstar lo ha vuelto a hacer."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4372"),
      "game": "Grand Theft Auto V",
      "user": "DylanNrj",
      "rating": "4.7",
      "comment": "La libertad para explorar y causar caos es emocionante. Nunca me canso de jugarlo."
    },
    {
      "_id": new ObjectId("6649250ad4b9b25b391d4373"),
      "game": "Grand Theft Auto V",
      "user": "andriuw08",
      "rating": "4.9",
      "comment": "Una obra maestra del mundo abierto. La atención al detalle es fenomenal. Un clásico moderno."
    }
  ],
  users: [
    {
      "_id": new ObjectId("661318203e64865272032912"),
      "user": "TheMoys",
      "email": "diegomoys01@gmail.com",
      "password": "$2y$10$p/B5LP3pJLXg0fiV3BAE1OPzbQeADPkNUUqf931x7bBKvpE2t7tYi",
      "updated_at": {
        "$date": "2024-04-07T21:22:11.104Z"
      },
      "created_at": {
        "$date": "2024-04-07T21:22:11.104Z"
      }
    },
    {
      "_id": new ObjectId("6613182f3e64865272032913"),
      "user": "andriuwyepez",
      "email": "andriuw@gmail.com",
      "password": "$2y$10$mxx9rQbNY2OCcHID4uM1UuNcb7xO.ivoa0KDOxNXrvXpjeFI3KGpe",
      "updated_at": {
        "$date": "2024-04-07T22:03:12.919Z"
      },
      "created_at": {
        "$date": "2024-04-07T22:03:12.919Z"
      }
    },
    {
      "_id": new ObjectId("6613184b3e64865272032914"),
      "user": "Diegoza04",
      "email": "diegobarraza@gmail.com",
      "password": "$2y$10$jcbMoMbEo4PclxLWwqZCse3cgJd1qeJM86uUsNRn/njNcCo21w7tS",
      "updated_at": {
        "$date": "2024-04-07T22:03:30.830Z"
      },
      "created_at": {
        "$date": "2024-04-07T22:03:30.830Z"
      }
    },
    {
      "_id": new ObjectId("6613185a3e64865272032915"),
      "user": "DylanNrj",
      "email": "dylannrj@gmail.com",
      "password": "$2y$10$JzL8DPb2jgJP37tEVKllIOSlP0NG7fTpUXprhZa/GaidEQNVXt1da",
      "updated_at": {
        "$date": "2024-04-07T22:04:02.775Z"
      },
      "created_at": {
        "$date": "2024-04-07T22:04:02.775Z"
      }
    }
  ]
};

// Crear colecciones e insertar datos automáticamente
async function createCollections(db: Db): Promise<void> {
  const collections = ['games', 'reviews', 'users'];

  for (const collectionName of collections) {
    try {
      await db.createCollection(collectionName);
      console.log(`Colección ${collectionName} creada`);
      const collection: Collection = db.collection(collectionName);
      if (initialData[collectionName as keyof typeof initialData]) {
        await collection.insertMany(initialData[collectionName as keyof typeof initialData]);
        console.log(`Datos iniciales insertados en la colección ${collectionName}`);
      }
    } catch (error: any) {
      if (error.code === 48) {
        console.log(`La colección ${collectionName} ya existe`);
      } else {
        console.error(`Error creando la colección ${collectionName}:`, error);
      }
    }
  }
}

// Conexión a MongoDB y creación de colecciones
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
