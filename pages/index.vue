<template>
  <div>
    <top />
    <news />
    <about />
  </div>
</template>

<script>
import Top from '~/components/Top.vue'
import News from '~/components/News.vue'
import About from '~/components/About.vue'
export default {
  components: {
    Top,
    News,
    About
  }
}
</script>
