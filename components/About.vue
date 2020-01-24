<template>
  <div>
    <!-- TODO: 画面いっぱいに広がるように拡張したい -->
    <!-- レスポンシブレイアウトに応じてheightを調節したい -->
    <v-parallax dark src="/images/bg.jpg" height="600">
      <div class="text-center py-5">
        <fade-in-up-in-screen>
          <h2 class="display-1 font-weight-black">ABOUT</h2>
          <p class="subtitle-1">- サークル紹介 -</p>
        </fade-in-up-in-screen>
      </div>
      <div class="text-left">
        <fade-in-up-in-screen>
          <h4 class="title font-weight-black mb-4">
            小平を中心に活動しているキッズダンスサークルです
          </h4>
          <p>
            活動をはじめてから１０年が経ちました！
          </p>
          <p>
            小学校１年生から中学校３年生までのキッズ達が、 楽しく活動
            しています。 ほとんどの子供たちが初心者からダンスを始めました。
          </p>
          <p>
            ヒップホップを中心に、ロック、ハウスとなかなかキッズダンスでは習えないダンスに挑戦しています。<br />
            ３～４ヶ月に１回はイベントに参加し、みんなの練習の成果を発表する場を設けていますので、子ども達のモチベーションもＵＰ♪<br />
            子ども達はいつも次のイベントを楽しみにレッスンを受けています★<br />
          </p>
        </fade-in-up-in-screen>
      </div>
    </v-parallax>
  </div>
</template>
<style scoped>
.display-1 {
  letter-spacing: 0.2em !important;
}
</style>
