<template>

  <div id="app">
    <div id="header">
      <hr>
      <router-link to="/">Dashboard</router-link> 
      <router-link to="/highlight">Highlight</router-link>
      <router-link to="/multiplechoice">Multiple Choice</router-link>
      <router-link to="/performance">Performance</router-link>
      <hr>
    </div>
    <router-view></router-view>

    
  </div>
</template>

<script>


export default {
  name: 'app',
  
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
#header {
  position: relative;
  margin-bottom: 20px;
}
a {
  padding-left: 5px;
}
</style>
