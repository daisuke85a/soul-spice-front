<template>
  <div>
    <div class="text-center py-5">
      <h2 class="display-1 font-weight-black pt-10">NEWS</h2>
      <p class="subtitle-1">- 新着情報 -</p>
    </div>
    <!-- TODO: ３行以上の場合はアコーディオンにしたい -->
    <v-row v-for="n in 1" :key="n" class="mb-1" no-gutters>
      <v-col
        v-for="content in contents"
        :key="content.id"
        class="col-12 col-sm-4"
      >
        <v-card class="pa-2 ma-2 mx-auto" outlined tile>
          <v-img class="align-end" :src="content.image"> </v-img>
          <!-- TODO: 画像とテキストを重ねて、背景をグレーの透過色にしておしゃれにしてみたい -->
          <v-card-title class="font-weight-bold">
            <h3 class="title font-weight-bold">
              {{ content.title }}
            </h3>
          </v-card-title>
          <v-card-subtitle class="pb-0">{{ content.date }}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>
              {{ content.paragraph }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn color="light-blue" dark class="mb-5" @click="addNews">
        NEWSをもっと見る
      </v-btn>
    </v-row>
  </div>
</template>
<script>
const axios = require('axios')
export default {
  data() {
    return {
      contents: [],
      news: null
    }
  },
  async mounted() {
    this.news = await axios.get(
      'https://soulspice.microcms.io/api/v1/news?limit=100',
      {
        headers: {
          'X-API-KEY': process.env.API_KEY
        }
      }
    )
    console.log(this.news)
    this.addNews()
    // this.addNews()

    console.log(this.contents)
  },
  methods: {
    addNews() {
      let len = this.contents.length + 3
      if (len > this.news.data.contents.length) {
        len = this.news.data.contents.length
      }
      for (let i = this.contents.length; i < len; i++) {
        const image = this.news.data.contents[i].image.url
        const date = new Date(this.news.data.contents[i].date)
        const formatted = `${date.getFullYear()}-${date.getMonth() +
          1}-${date.getDate()}`.replace(/\n|\r/g, '')

        const contents = {
          id: this.news.data.contents[i].id,
          title: this.news.data.contents[i].title,
          date: formatted,
          image,
          paragraph: this.news.data.contents[i].paragraph
        }

        this.contents.push(contents)
      }
    }
  }
}
</script>
<style scoped>
.display-1 {
  letter-spacing: 0.2em !important;
}
</style>
