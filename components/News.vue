<template>
  <div>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <fade-in-up-in-screen>
          <h2 class="display-2 font-weight-black pa-5">[ NEWS ]</h2>
        </fade-in-up-in-screen>
      </v-col>
    </v-row>
    <!-- TODO: ３行以上の場合はアコーディオンにしたい -->
    <v-row v-for="n in 1" :key="n" class="mb-1" no-gutters>
      <v-col v-for="k in 3" :key="k" class="col-12 col-sm-4">
        <fade-in-up-in-screen>
          <v-card class="pa-2 ma-2 mx-auto" outlined tile>
            <v-img
              class="white--text align-end"
              src="/images/NEWS-2019-09-21.jpg"
            >
              <!-- TODO: テキストの背景をグレーの透過色にしておしゃれにしたい -->
              <v-card-title class="font-weight-bold py-0">
                ダンスコンテストGLORYの<br />U15部門Flava2位
              </v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">2019/9/21</v-card-subtitle>
            <v-card-text class="text--primary">
              <!-- TODO: テキストが一定以上の場合はアコーディオンにしたい -->
              <div>
                とてつもなく豪華なジャッジの方に見ていただけるだけではなくその場で全てのジャッジから得点や総評、個人感想もいただけてとても実のあるコンテストでした。関係者の方々、一緒に写真をとってくれた方々、ありがとうございました！そして子供達には挑戦できる場所がある事、親御さんの協力や応援してくれる仲間、この環境が当たり前ではないという事、謙虚さと感謝を忘れずにこれからも目標に向かって進んで行ってほしいです。
              </div>
            </v-card-text>
          </v-card>
        </fade-in-up-in-screen>
      </v-col>
    </v-row>
  </div>
</template>
