<template>
  <div>
    <top />
    <news />
    <about />
    <in-screen>
      <instructor />
    </in-screen>
  </div>
</template>

<script>
import Top from '~/components/Top.vue'
import News from '~/components/News.vue'
import About from '~/components/About.vue'
import Instructor from '~/components/Instructor.vue'
import InScreen from '~/components/InScreen.vue'
export default {
  components: {
    Top,
    News,
    About,
    Instructor,
    InScreen
  }
}
</script>
