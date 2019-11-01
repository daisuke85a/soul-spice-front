<template>
  <div>
    <top />
    <news />
    <about />
    <instructor />
    <schedule />
    <movie />
  </div>
</template>

<script>
import Top from '~/components/Top.vue'
import News from '~/components/News.vue'
import About from '~/components/About.vue'
import Instructor from '~/components/Instructor.vue'
import Schedule from '~/components/Schedule.vue'
import Movie from '~/components/Movie.vue'
export default {
  components: {
    Top,
    News,
    About,
    Instructor,
    Schedule,
    Movie
  }
}
</script>
