<template>
  <div :class="[{ active: isInScreen }, { default: isOutScreen }]">
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
      if (this.scrollY > this.position) {
        return true
      } else {
        return false
      }
    },
    // TODO: this.isInScreen()がコールできない。他にきれいな書き方がないか？
    isOutScreen() {
      if (this.scrollY > this.position) {
        return false
      } else {
        return true
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
      this.position = this.getPosition()
    },
    onResize() {
      this.height = document.documentElement.clientHeight
      this.position = this.getPosition()
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
<style scoped>
.active {
  animation: fadeInUp 1.5s;
}
.default {
  opacity: 0;
}
@keyframes fadeInUp {
  0% {
    transform: translateY(300px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
