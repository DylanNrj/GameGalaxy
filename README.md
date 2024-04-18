<img src="https://github.com/DylanNrj/GameGalaxy/blob/Diego_Moys/GameGalaxy_Logo.webp" alt="Logo de Game Galaxy" width="300" height="300">

¡Bienvenido a Game Galaxy, tu destino definitivo para descubrir y clasificar videojuegos! 
Con Game Galaxy, puedes explorar una galaxia de juegos de todas las plataformas y géneros, 
desde los clásicos retro hasta los últimos lanzamientos. ¿Encontraste un juego increíble que merece ser destacado? 
¡Califícalo y comparte tu opinión para ayudar a otros jugadores a encontrar joyas ocultas! Únete a nuestra comunidad de jugadores 
y ¡que comience la aventura en el universo de los videojuegos!

## Instrucciones de Ejecución

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

### Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu sistema:

- PhP en su version 8.2
- Laravel en su version 9
- Composer (disponible en este enlace https://getcomposer.org/download/)
- MongoDB y su extension para php en su version 1.17.1 disponible en el siguiente enlace https://github.com/mongodb/mongo-php-driver/releases/
  (el archivo .dll y .pdb deben estar dentro de la carpeta "ext" en la direccion donde se tiene instalado php)
- Agregar en el php.ini la extencion "extension=mongodb"

### Instalación

1. Clona este repositorio en tu máquina local.
2. Abrir una terminal dentro de la carpeta "game_galaxy_back" y ejecutar el comando "php artisan serve" para que el backend se levante de manera local.
3. ............................


### Descripción del backEnd

- En la ruta app/http/controllers/api se encuentran los diferentes controladores que hay para la base de datos, con sus schemas y relaciones, los schemas se ven de la siguiente manera:
  * $review->game = $request->game;
  * $review->user = $request->user;
  * $review->rating = $request->rating;
  * $review->comment = $request->comment;
  * Esto es para que la aplicación pueda detectar que es lo que viene del request y los campos que tiene que llenar en el documento de mongo.
 
- En la ruta app/Models se encuentran los modelos que contienen el nombre de la colección que utiliza y tambien el nombre de la conexión a la base de datos en mongo
