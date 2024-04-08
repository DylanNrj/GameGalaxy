<template>
  <v-app>
    <v-main>
        <v-app-bar
          absolute
          color="white"
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
    
          <v-toolbar-title>GAMEGALAXY</v-toolbar-title>
    
          <v-spacer></v-spacer>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn 
                icon
                v-bind="attrs"
                v-on="on"
              >
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
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .sign-up{
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 169.231% */
    letter-spacing: 0.46px;
    text-transform: uppercase;
    text-decoration: none;
    color: #000;
  }
</style>
