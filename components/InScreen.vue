<template>
  <div :class="{ active: isInScreen }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    offset: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      scrollY: 0,
      height: 0,
      position: 0
    }
  },
  computed: {
    isInScreen() {
      if (this.scrollY > this.position + this.offset) {
        return true
      } else {
        return false
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onResize)
    window.addEventListener('load', () => {
      this.onScroll()
      this.onResize()
    })
  },
  methods: {
    onScroll() {
      this.scrollY = window.pageYOffset
    },
    onResize() {
      this.height = document.documentElement.clientHeight
    },
    getPosition() {
      if (this.$el) {
        return this.$el.getBoundingClientRect().top + this.scrollY - this.height
      } else {
        return 0
      }
    }
  }
}
</script>
