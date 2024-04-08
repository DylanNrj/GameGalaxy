<template>
  <div class="fix-content">
    <div class="container-button-all-games">
      <span class="titles"> Últimos Lanzamientos </span>
      <v-btn
        elevation="2"
        href="#all-games"
        class="button-all-games text-btn"
      >
        Ver todos
      </v-btn>
    </div>
    <div>
      <div class="container-preview-games">
        <v-card
          v-for="(game, index) in games"
          :key="index"
          class="mx-auto my-12 card-game"
        >
          <v-img
            height="350"
            :src="game.image_url"
          ></v-img>
  
          <v-card-title>
            <span class="title-cards"> {{ game.name }} </span>
          </v-card-title>
  
          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
              <v-rating
                :value="game.rating"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
  
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
    <div style="padding-top: 32px;" id="all-games">
      <div>
        <span class="titles">Todos los VideoJuegos</span>
      </div>
      <div class="container-all-games">
        <v-card
          v-for="(game, index) in games"
          :key="index"
          class="mx-auto my-12"
        >
          <div class="vertical-cards">
            <v-row>
              <v-col cols="2">
                <v-img
                  height="200"
                  width="200"
                  :src="game.image_url"
                ></v-img>
              </v-col>
              
              <v-col cols="2" align-self="center">
                <v-card-title>
                  <span class="title-cards"> {{ game.name }} </span>
                </v-card-title>
              </v-col>
      
              <v-col align-self="center">
                <v-card-text>
                  <v-row
                    align="center"
                    class="mx-0"
                  >
                    <v-rating
                      :value="game.rating"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>
        
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
                    <v-btn
                      color="primary"
                      text
                      @click="showReviews(game)"
                    >
                      <span class="text-btn">  Ver opiniones </span>
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
            <v-card-title>
              <span class="titleS"> {{ selectedGame.name }} - Opiniones </span>
            </v-card-title>
      
            <v-card-text>
              <div class="comments-contain">
                <div v-for="(review, index) in selectedReviews" :key="index">
                  <v-row>
                    <v-col cols="2"> 
                      <span class="description-text"> {{ review.user }} </span>
                    </v-col>
                    <v-col cols="2">
                      <v-rating
                        :value="parseFloat(review.rating)"
                            color="amber"
                          dense
                          half-increments
                          readonly
                          size="14"
                      ></v-rating>
                    </v-col>
                    <v-col>
                      <span class="description-text"> Comentario: {{ review.comment }} </span>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-card-text>
      
            <v-card-actions class="position-btn-comments">
              <v-btn class="text-btn" text @click="closeDialog">
                Cerrar
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import games from "../assets/json/game_galaxy.games.json";
import reviews from "../assets/json/reviews_games.json";

export default {
  name: 'HomeGames',

  data: () => ({
    games: [],
    reviews: [],
    dialog: false,
    selectedGame: null,
    selectedReviews: []
  }),

  created() {
    this.games = games;
    this.reviews = reviews;
    // this.loadReviews();
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
      this.selectedGame = null;
      this.selectedReviews = [];
    }
  }
}
</script>


<style scoped>
  .fix-content{
    margin: 96px 32px 32px 32px;
  }

  .container-preview-games{
    display: flex;
    gap: 32px;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 0px 16px;
  }

  .card-game{
    height: 600px;
    width: 200px;
  }

  .vertical-cards{
    display: flex;
    align-items: center;
  }

  .container-button-all-games{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .position-btn-comments{
    display: flex;
    justify-content: flex-end;
  }

  .comments-contain{
    display: grid;
    gap: 32px;
  }

  .titles{
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    color: hsl(244, 12%, 12%);
  }

  .title-cards{
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; 
    color: hsl(244, 12%, 12%);
  }

  .content-comments{
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 8px
  }

  .text-btn{
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.46px;
    text-transform: uppercase;
  }

  .description-text{
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: hsl(244, 4%, 36%);
  }
</style>
