<template>
  <div>
    <v-app-bar absolute color="white">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="title-page"> GAMEGALAXY </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi mdi-account</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <a href="" class="sign-up">Cerrar sesión </a>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <div class="fix-content">
      <div class="container-button-all-games">
        <div>
        <span class="titles"> Últimos Lanzamientos </span>
        </div>
        <div class="container-button-all-games" style="gap: 16px">
          <div>
            <v-btn elevation="2" href="#all-games" class="button-all-games text-btn">
              Ver todos
            </v-btn>
          </div>
          <div>
            <v-btn elevation="2" class="button-all-games text-btn" @click="createGameModal()">
                Crear
            </v-btn>
          </div>
        </div>
      </div>
      <div>
        <div class="container-preview-games">
          <v-card v-for="(game, index) in info" :key="index" class="mx-auto my-12 card-game" width="300">
            <v-img height="350" :src="game.image_url"></v-img>

            <v-card-title>
              <span class="title-cards"> {{ game.name }} </span>
            </v-card-title>

            <v-card-subtitle>
              <v-btn
                icon
                small
                @click="editGameModal(game)"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn
                icon
                small
                @click="deleteGame(game)"
              >
                <v-icon>mdi-delete  </v-icon>
              </v-btn>
            </v-card-subtitle>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating :value="game.rating" color="amber" dense half-increments readonly size="14"></v-rating>

                <div class="grey--text ms-4">
                  {{ game.rating }} ({{ game.num_reviews }})
                </div>
              </v-row>

              <div class="my-4 text-subtitle-1">
                {{ game.genre }}
              </div>

              <div>
                <span class="description-text"> {{ game.description | truncate }} </span>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
    <div style="padding-top: 32px;" id="all-games">
        <div>
          <span class="titles">Todos los VideoJuegos</span>
        </div>
        <div class="container-all-games">
          <v-card v-for="(game, index) in info" :key="index" class="mx-auto my-12">
            <div class="vertical-cards">
              <v-row>
                <v-col cols="2">
                  <v-img height="200" width="200" :src="game.image_url"></v-img>
                </v-col>

                <v-col cols="2" align-self="center">
                  <v-card-title>
                    <span class="title-cards"> {{ game.name }} </span>
                  </v-card-title>
                </v-col>

                <v-col align-self="center">
                  <v-card-text>
                    <v-row align="center" class="mx-0">
                      <v-rating :value="game.rating" color="amber" dense half-increments readonly size="14"></v-rating>

                      <div class="grey--text ms-4">
                        {{ game.rating }} ({{ game.num_reviews }})
                      </div>
                    </v-row>

                    <div class="my-4 text-subtitle-1">
                      {{ game.genre }}
                    </div>

                    <div>
                      <span class="description-text"> {{ game.description }} </span>
                    </div>
                  </v-card-text>
                  <v-card-actions class="position-btn-comments">
                    <div>
                      <v-btn color="primary" text @click="showReviews(game)">
                        <span class="text-btn"> Ver opiniones </span>
                      </v-btn>
                    </div>
                  </v-card-actions>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </div>

        <v-dialog v-model="dialog" max-width="600">
          <v-card v-if="selectedGame">
            <div class="content-comments">
              <v-card-title class="fix-content-title">
                <span class="titleS"> {{ selectedGame.name }} - Opiniones </span>
                <v-btn class="text-btn" text @click="isCreating = true" v-if="">
                  Añadir
                </v-btn>
              </v-card-title>
              <v-card-text>
                <div class="comments-contain" v-if="!isCreating">
                  <div v-for="(review, index) in selectedReviews" :key="index">
                    <v-row>
                      <v-col cols="2">
                        <span class="description-text"> {{ review.user }} </span>
                      </v-col>
                      <v-col cols="2">
                        <v-rating :value="parseFloat(review.rating)" color="amber" dense half-increments readonly
                          size="14"></v-rating>
                      </v-col>
                      <v-col>
                        <span class="description-text"> Comentario: {{ review.comment }} </span>
                      </v-col>
                    </v-row>
                  </div>
                </div>
                <div class="comments-contain" v-else>
                    <v-row>
                      <v-col>
                        <v-text-field
                          outlined
                          dense
                          label="Nombre del Usuario"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field
                          outlined
                          dense
                          label="Rating del VideoJuego"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field
                          outlined
                          dense
                          label="Comentario del VideoJuego"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                </div>
              </v-card-text>
              <v-card-actions class="position-btn-comments">
                <v-btn class="text-btn" text @click="closeDialog">
                  Cerrar
                </v-btn>
                <v-btn class="text-btn" text @click="addReview" v-if="isCreating">
                  Guardar
                </v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogCreate" max-width="600">
          <v-card>
              <v-card-title>
                <span class="titleS"> Crear un nuevo VideoJuego </span>
              </v-card-title>
               <v-card-text>
          <v-row>
            <v-col>
              <v-text-field
                v-model="newGame.name"
                outlined
                dense
                label="Nombre del VideoJuego"
                required
              ></v-text-field>
            </v-col>

            <v-col>
              <v-text-field
                v-model="newGame.rating"
                outlined
                dense
                label="Rating del VideoJuego"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="newGame.gender"
                outlined
                dense
                label="Género"
                required
              ></v-text-field>
            </v-col>

            <v-col>
              <v-text-field
                v-model="newGame.description"
                outlined
                dense
                label="Breve descripción del VideoJuego"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="newGame.image_url"
                outlined
                dense
                label="URL de la imagen"
                required
              ></v-text-field>
            </v-col>

            <v-col>
              <v-text-field
                v-model="newGame.num_reviews"
                outlined
                dense
                label="Número de opiniones"
                required
                type="number"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="newGame.platform"
                outlined
                dense
                label="Plataforma"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="newGame.release_date"
                outlined
                dense
                label="Fecha de lanzamiento"
                required
                type="date"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
              <v-card-actions class="position-btn-comments">
                <v-btn class="text-btn" text @click="closeDialogCreate">
                  Cerrar
                </v-btn>
                <v-btn class="text-btn" text @click="addGame">
                  Añadir
                </v-btn>
              </v-card-actions>
          </v-card>
        </v-dialog>

    <v-dialog v-model="dialogEdit" max-width="600">
      <v-card>
        <v-card-title>
          <span class="titleS"> Editar VideoJuego </span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field
                v-model="newGame.name"
                outlined
                dense
                label="Nombre del VideoJuego"
                required
              ></v-text-field>
            </v-col>

            <v-col>
              <v-text-field
                v-model="newGame.rating"
                outlined
                dense
                label="Rating del VideoJuego"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="newGame.genre"
                outlined
                dense
                label="Género"
                required
              ></v-text-field>
            </v-col>

            <v-col>
              <v-text-field
                v-model="newGame.description"
                outlined
                dense
                label="Breve descripción del VideoJuego"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="newGame.image_url"
                outlined
                dense
                label="URL de la imagen"
                required
              ></v-text-field>
            </v-col>

            <v-col>
              <v-text-field
                v-model="newGame.num_reviews"
                outlined
                dense
                label="Número de opiniones"
                required
                type="number"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="newGame.platform"
                outlined
                dense
                label="Plataforma"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="newGame.release_date"
                outlined
                dense
                label="Fecha de lanzamiento"
                required
                type="date"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="position-btn-comments">
          <v-btn class="text-btn" text @click="closeDialogEdit">
            Cerrar
          </v-btn>
          <v-btn class="text-btn" text @click="editGame">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HomeGames',

  data: () => ({
    games: [],
    reviews: [],
    dialog: false,
    dialogCreate: false,
    dialogEdit: false,
    selectedGame: null,
    selectedReviews: [],
    info: [],
    isCreating: false,
    newGame: {
      name: '',
      rating: '',
      genre: '',
      description: '',
      image_url: '',
      num_reviews: 0,
      gender: '',
      platform: '',
      release_date: ''
    }
    }),

  created() {
    this.games = games;
  },

  filters: {
    truncate(value) {
      const length = 100;
      if (value.length <= length) {
        return value;
      } else {
        return value.substring(0, length) + '...';
      }
    }
  },

  methods: {
    showReviews(game) {
      this.selectedGame = game;
      this.selectedReviews = this.reviews.filter(review => review.game === game.name);
      this.dialog = true;
    },

    closeDialog() {
      this.dialog = false;
      this.isCreating = false;
      this.selectedGame = null;
      this.selectedReviews = [];
    },

    createGameModal() {
      this.newGame = {}
      this.dialogCreate = true;
    },

    closeDialogCreate() {
      this.dialogCreate = false;
    },

    editGameModal(game) {
      this.selectedGame = game;
      this.newGame = { ...game };
      this.dialogEdit = true;
    },

    closeDialogEdit() {
      this.dialogEdit = false;
    },

    addGame() {
        axios.post('http://localhost:3000/api/games', this.newGame)
          .then(response => {
            this.info.push(response.data); // Añade el nuevo juego a la lista
            this.dialogCreate = false; // Cierra el modal
            this.newGame = { // Resetea los campos del formulario
              name: '',
              rating: '',
              genre: '',
              description: '',
              image_url: '',
              num_reviews: 0,
              gender: '',
              platform: '',
              release_date: ''
            };
          })
          .catch(error => {
            console.error('Error al registrar:', error);
          });
      },

    editGame() {
      const gameId = this.selectedGame._id || this.selectedGame.id;
      if (!gameId) {
        console.error('El ID del juego no está definido');
        return;
      }

      axios.put(`http://localhost:3000/api/games/${gameId}`, this.newGame)
        .then(response => {
          const index = this.info.findIndex(game => game._id === gameId || game.id === gameId);
          if (index !== -1) {
            this.info.splice(index, 1, response.data); // Actualiza el juego en la lista
          }
          this.dialogEdit = false; // Cierra el modal
          this.newGame = { // Resetea los campos del formulario
            name: '',
            rating: '',
            genre: '',
            description: '',
            image_url: '',
            num_reviews: 0,
            gender: '',
            platform: '',
            release_date: ''
          };
        })
        .catch(error => {
          console.error('Error al actualizar:', error);
        });
    },

deleteGame(game) {
    const gameId = game._id || game.id;
    if (!gameId) {
      console.error('El ID del juego no está definido');
      return;
    }

    axios.delete(`http://localhost:3000/api/games/${gameId}`)
      .then(() => {
        const index = this.info.findIndex(g => g._id === gameId || g.id === gameId);
        if (index !== -1) {
          this.info.splice(index, 1); // Elimina el juego de la lista
        }
      })
      .catch(error => {
        console.error('Error al eliminar el juego:', error);
      });
  }
  },

  mounted() {
    axios
      .get('http://localhost:3000/api/games')
      .then(response => {
        this.info = response.data;
      });

    axios
      .get('http://localhost:3000/api/reviews')
      .then(response => {
        this.reviews = response.data;
      });
  }
}
</script>




<style scoped>
@import '../styles/login.css';
</style>