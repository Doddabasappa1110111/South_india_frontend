<template>
  <div id="app">
  <navigation></navigation>
  <div class="padding">
        <router-view></router-view>
  </div>   
  <footers> </footers>
   </div>
</template>

<script>
import navigation from './components/navigation.vue';
import footers from './components/footercomponent'

export default {
  name: 'app',
  components: {
    navigation,
    footers
  }
}
</script>

<style>
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
    
}
.padding{
  margin-top: 90px;
}
  .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
</style>
