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
            <v-img class="white--text align-end" :src="image">
              <!-- TODO: テキストの背景をグレーの透過色にしておしゃれにしたい -->
              <v-card-title class="font-weight-bold py-0">
                {{ title }}
              </v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{ date }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <!-- TODO: テキストが一定以上の場合はアコーディオンにしたい -->
              <div>
                {{ paragraph }}
              </div>
            </v-card-text>
          </v-card>
        </fade-in-up-in-screen>
      </v-col>
    </v-row>
  </div>
</template>
<script>
const axios = require('axios')
export default {
  data() {
    return {
      title: null,
      date: null,
      image: 'init', // nullだとimageの読み込みに失敗してエラーになるから初期化
      paragraph: null
    }
  },
  async mounted() {
    const news = await axios.get('https://soulspice.microcms.io/api/v1/news', {
      headers: {
        'X-API-KEY': process.env.API_KEY
      }
    })
    console.log(news)
    this.title = news.data.contents[0].title

    const date = new Date(news.data.contents[0].date)
    const formatted = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()}`.replace(/\n|\r/g, '')

    this.date = formatted
    this.image = news.data.contents[0].image.url
    this.paragraph = news.data.contents[0].paragraph
  }
}
</script>
