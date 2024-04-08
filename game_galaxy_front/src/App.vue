<template>
  <v-app>
    <v-main>
        <v-app-bar
          absolute
          color="white"
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
    
          <v-toolbar-title>
            <span class="title-page"> GAMEGALAXY </span>
          </v-toolbar-title>
    
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
  .title-page{
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }

  .sign-up{
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.46px;
    text-transform: uppercase;
    text-decoration: none;
    color: hsl(244, 12%, 12%);
  }
</style>
