<template>
  <div>
    <top />
    <news />
  </div>
</template>

<script>
import Top from '~/components/Top.vue'
import News from '~/components/News.vue'
export default {
  components: {
    Top,
    News
  }
}
</script>
