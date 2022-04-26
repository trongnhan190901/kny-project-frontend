<template>
  <div id="app">

    <Header/>

    <router-view />
    
  </div>
 

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
}
::-webkit-scrollbar{
    width: 4px;
}
::-webkit-scrollbar-track{
    background-color:transparent;
}
::-webkit-scrollbar-thumb {
    background-color: #616161;
    border-radius: 20px;
}

</style>
