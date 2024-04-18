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
- Inslación modules de node y librerias desde un terminal dentro de la carpeta "game_galaxy_front" ejecutar el comando "npm install"

### Instalación

1. Clona este repositorio en tu máquina local.
2. Abrir una terminal dentro de la carpeta "game_galaxy_back" y ejecutar el comando "php artisan serve" para que el backend se levante de manera local.
3. Abrir un terminal dentro de la carpeta "game_galaxy_front" y ejecutar el comando "npm run serve" para que el front se levante de manera local.


### Descripción del backEnd

- En la ruta app/http/controllers/api se encuentran los diferentes controladores que hay para la base de datos, con sus schemas y relaciones, los schemas se ven de la siguiente manera:
  * $review->game = $request->game;
  * $review->user = $request->user;
  * $review->rating = $request->rating;
  * $review->comment = $request->comment;
  * Esto es para que la aplicación pueda detectar que es lo que viene del request y los campos que tiene que llenar en el documento de mongo.
 
- En la ruta app/Models se encuentran los modelos que contienen el nombre de la colección que utiliza y tambien el nombre de la conexión a la base de datos en mongo

### Descripción del Front

- Estas son las rutas del Front

  * src/: Este es donde vive el código fuente principal de la aplicación.
  * src/assets/: Este directorio contiene activos estáticos como imágenes y hojas de estilo. En este caso, incluye una imagen del logotipo de GameGalaxy.
  * src/components/: Este directorio contiene componentes UI reutilizables para la aplicación. Incluye un componente Formulario.vue y HomeGames.vue.
  * src/plugins/: Este directorio contiene plugins de JavaScript utilizados en la aplicación. Incluye plugins para Axios (para hacer solicitudes HTTP) y Vuetify (para agregar componentes de Material Design).
  * src/views/: Este directorio contiene diferentes vistas para la aplicación. Incluye una HomeView.vue y LoginView.vue
  * src/App.vue: Este es el componente de la aplicación principal que lo une todo.
  * src/main.js: Este es el punto de entrada de la aplicación, donde se crea y monta la instancia de Vue en el DOM.
  * package.json: Este archivo contiene metadatos sobre el proyecto, incluyendo sus dependencias y scripts.

### Usuarios y Contraseñas de Login 

- Estas son las credenciales para iniciar sesión en la página web 
  * Usuario: TheMoys
  * Contraseña: $2y$10$p/B5LP3pJLXg0fiV3BAE1OPzbQeADPkNUUqf931x7bBKvpE2t7tYi
  * Usuario: andriuwyepez 
  * Contraseña: $2y$10$mxx9rQbNY2OCcHID4uM1UuNcb7xO.ivoa0KDOxNXrvXpjeFI3KGpe
  * Usuario: Diegoza04
  * Contraseña: $2y$10$jcbMoMbEo4PclxLWwqZCse3cgJd1qeJM86uUsNRn/njNcCo21w7tS
  * Usuario: DylanNrj
  * Contraseña: $2y$10$JzL8DPb2jgJP37tEVKllIOSlP0NG7fTpUXprhZa/GaidEQNVXt1da
















