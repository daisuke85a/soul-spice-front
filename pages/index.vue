<template>
  <div>
    <top />
    <news />
    <about />
    <instructor />
  </div>
</template>

<script>
import Top from '~/components/Top.vue'
import News from '~/components/News.vue'
import About from '~/components/About.vue'
import Instructor from '~/components/Instructor.vue'
export default {
  components: {
    Top,
    News,
    About,
    Instructor
  }
}
</script>
