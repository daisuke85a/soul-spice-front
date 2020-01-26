<template>
  <div>
    <!-- TODO: 画面いっぱいに広がるように拡張したい -->
    <!-- レスポンシブレイアウトに応じてheightを調節したい -->
    <v-img class="white--text" src="/images/bg.jpg" height="100%">
      <div class="text-center py-5">
        <fade-in-up-in-screen>
          <h2 class="display-1 font-weight-black pt-10">ABOUT</h2>
          <p class="subtitle-1">- サークル紹介 -</p>
        </fade-in-up-in-screen>
      </div>
      <fade-in-up-in-screen>
        <div class="text-left">
          <h4 class="title font-weight-black mb-4">
            小平を中心に活動しているキッズダンスサークルです
          </h4>
          <p>
            活動をはじめてから１０年が経ちました！
          </p>
          <p>
            小学校１年生から中学校３年生までのキッズ達が、 楽しく活動
            しています。
          </p>
          <p>ほとんどの子供たちが初心者からダンスを始めました。</p>
          <p>
            ヒップホップを中心に、ロック、ハウスとなかなかキッズダンスでは習えないダンスに挑戦しています。
          </p>
          <p>
            ３～４ヶ月に１回はイベントに参加し、みんなの練習の成果を発表する場を設けていますので、子ども達のモチベーションもＵＰ♪
          </p>
          <p>
            子ども達はいつも次のイベントを楽しみにレッスンを受けています★<br />
          </p>
        </div>
        <div class="text-center py-5">
          <v-btn
            color="orange font-weight-bold"
            dark
            :small="$vuetify.breakpoint.xsOnly"
            @click="$vuetify.goTo('#contact')"
          >
            <v-icon>mdi-email</v-icon>お問い合わせ
          </v-btn>
        </div>
      </fade-in-up-in-screen>
    </v-img>
  </div>
</template>
<style scoped>
.display-1 {
  letter-spacing: 0.2em !important;
}
</style>
