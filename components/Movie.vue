<template>
  <div>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <fade-in-up-in-screen>
          <h2 class="display-1 font-weight-black">MOVIE</h2>
          <p class="subtitle-1">- メンバー動画 -</p>
        </fade-in-up-in-screen>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="embed-responsive embed-responsive-16by9" cols="12">
        <fade-in-up-in-screen>
          <iframe
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/videoseries?list=PLJgPtg4l-yVZ8FlF_mMu439KD6322ytoj&amp;ecver=1"
            frameborder="0"
            allow="autoplay; "
            allowfullscreen
          ></iframe>
        </fade-in-up-in-screen>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
.embed-responsive-16by9 {
  padding-bottom: 56.25%;
}
.embed-responsive {
  position: relative;
  display: block;
  height: 0;
  overflow: hidden;
}
.embed-responsive-item {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.display-1 {
  letter-spacing: 0.2em !important;
}
</style>
