<template>
  <div>
    <!-- TODO: 画面いっぱいに広がるように拡張したい -->
    <v-parallax dark src="/images/bg.jpg" height="600">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-2 font-weight-black mb-4">SOUL SPICE</h1>
          <h4 class="headline font-weight-bold subheading">
            小平で活動する<br />キッズダンスサークル
          </h4>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-btn
          color="orange font-weight-bold"
          dark
          :small="$vuetify.breakpoint.xsOnly"
          @click="$vuetify.goTo('#contact')"
        >
          <v-icon>mdi-email</v-icon>新メンバー＆イベントブッキング募集中！
        </v-btn>
      </v-row>
    </v-parallax>
  </div>
</template>
<style scoped>
.display-2 {
  letter-spacing: 0.1em !important;
}
.headline {
  letter-spacing: 0.05em !important;
}
</style>
