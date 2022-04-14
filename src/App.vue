<template>
  <Header />

  <router-view />

</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
* {
  font-family: 'Mulish', sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
