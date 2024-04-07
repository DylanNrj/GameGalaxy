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
          <v-btn icon>
            <v-icon>mdi mdi-account</v-icon>
          </v-btn>
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
