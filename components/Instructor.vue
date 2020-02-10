<template>
  <div>
    <div class="text-center py-5">
      <fade-in-up-in-screen>
        <h2 class="display-1 font-weight-black pt-10">INSTRUCTOR</h2>
        <p class="subtitle-1">- コーチ紹介 -</p>
      </fade-in-up-in-screen>
    </div>
    <v-row justify="center">
      <v-col
        v-for="content in contents"
        :key="content.id"
        class="col-12 col-sm-5"
      >
        <v-card class="pa-2 ma-2 mx-auto" outlined tile>
          <fade-in-up-in-screen>
            <v-img
              class="white--text align-end"
              :src="content.image.url"
              style="border-radius: 50%;"
            ></v-img>
          </fade-in-up-in-screen>
          <fade-in-up-in-screen>
            <v-card-title class="font-weight-bold">
              {{ content.name }}
              <v-spacer></v-spacer>
              <a class="mx-1" :href="content.instagram" target="_blank">
                <v-icon>mdi-instagram</v-icon>
              </a>
              <a class="mx-1" :href="content.facebook" target="_blank">
                <v-icon>mdi-facebook</v-icon>
              </a>
            </v-card-title>
          </fade-in-up-in-screen>
          <fade-in-up-in-screen>
            <v-card-subtitle>
              {{ content.lesson }}
            </v-card-subtitle>
          </fade-in-up-in-screen>
          <fade-in-up-in-screen>
            <v-card-text class="text--primary">
              <!-- TODO: テキストが一定以上の場合はアコーディオンにしたい -->
              <div v-html="content.description"></div>
            </v-card-text>
          </fade-in-up-in-screen>
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
      contents: null
    }
  },
  async mounted() {
    const data = await axios.get(
      'https://soulspice.microcms.io/api/v1/coach?limit=100',
      {
        headers: {
          'X-API-KEY': process.env.API_KEY
        }
      }
    )
    this.contents = data.data.contents
    console.log(this.contents)
  }
}
</script>
<style scoped>
.display-1 {
  letter-spacing: 0.2em !important;
}
a {
  text-decoration: none;
}
</style>
