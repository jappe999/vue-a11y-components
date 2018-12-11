<template>
  <div id="app">
    <skip-to-content href="#content" />
  </div>
</template>

<script>
import SkipToContent from './components/SkipToContent'

export default {
  name: 'App',
  components: {
    SkipToContent
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
</style>
