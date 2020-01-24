<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
      color="light-blue"
      dark
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          router
          exact
          @click="navLinkClick(item.to)"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-btn
      v-show="$vuetify.breakpoint.mdAndDown"
      fab
      color="light-blue"
      top
      left
      fixed
      @click.stop="drawer = !drawer"
    >
      <v-icon color="white">mdi-menu</v-icon>
    </v-btn>
    <top id="home" />
    <news id="news" />
    <about id="about" />
    <instructor id="instructor" />
    <schedule id="schedule" />
    <movie id="movie" />
    <contact id="contact" />
  </div>
</template>

<script>
import Top from '~/components/Top.vue'
import News from '~/components/News.vue'
import About from '~/components/About.vue'
import Instructor from '~/components/Instructor.vue'
import Schedule from '~/components/Schedule.vue'
import Movie from '~/components/Movie.vue'
import Contact from '~/components/Contact.vue'
export default {
  components: {
    Top,
    News,
    About,
    Instructor,
    Schedule,
    Movie,
    Contact
  },
  data() {
    return {
      clipped: false,
      drawer: null,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'ホーム',
          to: '#home'
        },
        {
          icon: 'mdi-information-outline',
          title: '最新情報',
          to: '#news'
        },
        {
          icon: 'mdi-circle-outline',
          title: 'サークル紹介',
          to: '#about'
        },
        {
          icon: 'mdi-account-supervisor-circle',
          title: 'コーチ紹介',
          to: '#instructor'
        },
        {
          icon: 'mdi-calendar',
          title: 'スケジュール',
          to: '#schedule'
        },
        {
          icon: 'mdi-movie-open-outline',
          title: 'メンバー動画',
          to: '#movie'
        },
        {
          icon: 'mdi-email',
          title: 'お問い合わせ',
          to: '#contact'
        }
      ],
      title: 'SoulSpice'
    }
  },
  methods: {
    navLinkClick(to) {
      this.$vuetify.goTo(to)
      this.drawer = null
    }
  }
}
</script>
