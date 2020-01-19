<template>
  <v-app dark>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <v-spacer></v-spacer>
      <span @click="$vuetify.goTo('#contact')">
        <v-icon style="cursor: pointer;">mdi-email</v-icon>
      </span>
    </v-footer>
  </v-app>
</template>
<script>
export default {}
</script>
