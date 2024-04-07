<template>
  <div class="fix-content">
    <div class="container-button-all-games">
      <span> Últimos Lanzamientos </span>
      <v-btn
        elevation="2"
        href="#all-games"
        class="button-all-games"
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
  
          <v-card-title>{{ game.name }}</v-card-title>
  
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
  
            <div>{{ game.description | truncate }}</div>
          </v-card-text>
        </v-card>
      </div>
    </div>
    <div style="padding-top:  32px;" id="all-games">
      <div>
        <span> Todos los VideoJuegos</span>
      </div>
      <div class="container-all-games">
        <v-card
          v-for="(game, index) in games"
          :key="index"
          class="mx-auto my-12"
        >
        <div class="vertical-cards">
          <v-img
            height="200"
            width="200"
            :src="game.image_url"
          ></v-img>
  
          <v-card-title>{{ game.name }}</v-card-title>
  
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
  
            <div>{{ game.description }}</div>
          </v-card-text>
        </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import games from "../assets/json/game_galaxy.games.json";

export default {
  name: 'HomeGames',

  data: () => ({
    games: []
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
</style>
