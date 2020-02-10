<template>
  <div>
    <!-- TODO: 画面いっぱいに広がるように拡張したい -->
    <v-img dark src="/images/bg.jpg" height="100vh">
      <v-row align="center" justify="center" style="height: 100%;">
        <v-col class="text-center white--text" cols="12">
          <h1 class="display-2 font-weight-black mb-4">SOUL SPICE</h1>
          <h4 class="headline font-weight-bold subheading">
            小平で活動する<br />キッズダンスサークル
          </h4>
        </v-col>
        <v-btn
          color="orange font-weight-bold"
          dark
          :small="$vuetify.breakpoint.xsOnly"
          @click="$goToTwice($vuetify, '#contact')"
        >
          <v-icon>mdi-email</v-icon>お問い合わせ
        </v-btn>
      </v-row>
    </v-img>
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
