<template>
  <div>
    <!-- TODO: 画面いっぱいに広がるように拡張したい -->
    <v-parallax dark src="/images/bg.jpg" height="600">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-4 font-weight-black mb-4">SOUL SPICE</h1>
          <h4 class="display-1 font-weight-bold subheading">
            小平で活動する<br />キッズダンスサークル
          </h4>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-btn
          color="orange font-weight-bold"
          dark
          x-large
          @click="$vuetify.goTo('#contact')"
        >
          <v-icon>mdi-email</v-icon>新規メンバー＆イベントブッキング 募集中！
        </v-btn>
      </v-row>
    </v-parallax>
    <v-row align="center" justify="center" class="pt-3">
      <v-col align="center" justify="center">
        <span @click="$vuetify.goTo('#contact')">
          <v-icon x-large style="cursor: pointer;">mdi-email</v-icon>
        </span>
        <a href="https://www.instagram.com/soulspice2006/">
          <v-icon x-large>mdi-instagram</v-icon>
        </a>
        <a href="https://www.facebook.com/soulspice/">
          <v-icon x-large>mdi-facebook</v-icon>
        </a>
        <a
          href="https://www.youtube.com/watch?v=WaeXxwmHWYI&feature=youtu.be&list=PLJgPtg4l-yVZ8FlF_mMu439KD6322ytoj"
        >
          <v-icon x-large>mdi-youtube</v-icon>
        </a>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
}
</style>
