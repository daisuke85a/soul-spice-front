<template>
  <v-app dark>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <v-spacer></v-spacer>
      <span class="mx-1" @click="$vuetify.goTo('#contact')">
        <v-icon style="cursor: pointer;">mdi-email</v-icon>
      </span>
      <a
        class="mx-1"
        href="https://www.instagram.com/soulspice2006/"
        target="_blank"
      >
        <v-icon>mdi-instagram</v-icon>
      </a>
      <a
        class="mx-1"
        href="https://www.facebook.com/soulspice/"
        target="_blank"
      >
        <v-icon>mdi-facebook</v-icon>
      </a>
      <a
        class="mx-1"
        href="https://www.youtube.com/watch?v=WaeXxwmHWYI&feature=youtu.be&list=PLJgPtg4l-yVZ8FlF_mMu439KD6322ytoj"
      >
        <v-icon>mdi-youtube</v-icon>
      </a>
    </v-footer>
  </v-app>
</template>
<script>
export default {}
</script>
<style scoped>
a {
  text-decoration: none;
}
span {
  letter-spacing: 0.05em !important;
}
</style>
