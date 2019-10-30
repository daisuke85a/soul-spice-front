<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
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
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'ホーム',
          to: '/' // TODO:スクロールに修正する
        },
        {
          icon: 'mdi-information-outline',
          title: '最新情報',
          to: '/'
        },
        {
          icon: 'mdi-circle-outline',
          title: 'サークル紹介',
          to: '/'
        },
        {
          icon: 'mdi-account-supervisor-circle',
          title: 'コーチ紹介',
          to: '/'
        },
        {
          icon: 'mdi-calendar',
          title: 'スケジュール',
          to: '/'
        },
        {
          icon: 'mdi-movie-open-outline',
          title: 'メンバー動画',
          to: '/'
        },
        {
          icon: 'mdi-contact-mail-outline',
          title: 'お問い合わせ',
          to: '/'
        }
      ],
      title: 'SoulSpice'
    }
  }
}
</script>
