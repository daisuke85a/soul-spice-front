import Vue from 'vue'

Vue.prototype.$goToTwice = ($vuetify, to) => {
  $vuetify.goTo(to)
  // スクロールして300ms後に再スクロールする
  // （VueによりDOMが動的に追加されてスクロール位置がずれてうまくスクロールできない対応）
  setTimeout(() => {
    $vuetify.goTo(to)
  }, 300)
}
