<template>
  <div>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h2 class="display-2 font-weight-black pa-5">[ NEWS ]</h2>
      </v-col>
    </v-row>
    <!-- TODO: ３行以上の場合はアコーディオンにしたい -->
    <v-row v-for="n in 1" :key="n" class="mb-1" no-gutters>
      <v-col
        v-for="content in contents"
        :key="content.id"
        class="col-12 col-sm-4"
      >
        <v-card class="pa-2 ma-2 mx-auto" outlined tile>
          <v-img class="white--text align-end" :src="content.image">
            <!-- TODO: テキストの背景をグレーの透過色にしておしゃれにしたい -->
            <v-card-title class="font-weight-bold py-0">
              {{ content.title }}
            </v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">{{ content.date }}</v-card-subtitle>
          <v-card-text class="text--primary">
            <!-- TODO: テキストが一定以上の場合はアコーディオンにしたい -->
            <div>
              {{ content.paragraph }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
const axios = require('axios')
export default {
  data() {
    return {
      contents: []
    }
  },
  async mounted() {
    const news = await axios.get('https://soulspice.microcms.io/api/v1/news', {
      headers: {
        'X-API-KEY': process.env.API_KEY
      }
    })
    console.log(news)

    for (let i = 0, len = news.data.contents.length; i < len; i++) {
      const image = news.data.contents[i].image.url
      const date = new Date(news.data.contents[i].date)
      const formatted = `${date.getFullYear()}-${date.getMonth() +
        1}-${date.getDate()}`.replace(/\n|\r/g, '')

      const contents = {
        id: news.data.contents[i].id,
        title: news.data.contents[i].title,
        date: formatted,
        image,
        paragraph: news.data.contents[i].paragraph
      }

      this.contents.push(contents)
    }
    console.log(this.contents)
  }
}
</script>
