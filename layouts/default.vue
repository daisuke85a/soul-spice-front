<template>
  <v-app dark>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <v-spacer></v-spacer>
      <span style="cursor: pointer;" @click="$vuetify.goTo('#contact')">
        <v-icon style="cursor: pointer;">mdi-email</v-icon
        ><span class="overline">新規メンバー＆イベントブッキング 募集中！</span>
      </span>
    </v-footer>
  </v-app>
</template>
<script>
export default {}
</script>
