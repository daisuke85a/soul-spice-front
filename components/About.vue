<template>
  <div>
    <!-- TODO: 画面いっぱいに広がるように拡張したい -->
    <!-- レスポンシブレイアウトに応じてheightを調節したい -->
    <v-parallax dark src="/images/bg.jpg" height="400">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <in-screen>
            <h2 class="display-2 font-weight-black">[ ABOUT ]</h2>
          </in-screen>
        </v-col>
        <v-col class="text-left" cols="12">
          <in-screen>
            <h4 class="title font-weight-black">
              小平を中心に活動しているキッズダンスサークルです
            </h4>
            <p>
              活動をはじめてから１０年が経ちました！<br />
              小学校１年生から中学校３年生までのキッズ達が、 楽しく活動
              しています。 ほとんどの子供たちが初心者からダンスを始めました。<br />
              ヒップホップを中心に、ロック、ハウスとなかなかキッズダンスでは習えないダンスに挑戦しています。<br />
              ３～４ヶ月に１回はイベントに参加し、みんなの練習の成果を発表する場を設けていますので、子ども達のモチベーションもＵＰ♪<br />
              子ども達はいつも次のイベントを楽しみにレッスンを受けています★<br />
            </p>
          </in-screen>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>
<script>
import InScreen from '~/components/InScreen.vue'
export default {
  components: {
    InScreen
  }
}
</script>
