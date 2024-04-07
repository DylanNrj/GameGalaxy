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
                  <a href="">Cerrar sesión </a>
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
