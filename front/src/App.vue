<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/ceos_logo.png">
    <HelloCeos msg="Welcome to CEOS First AWS Study !"/>
    <Input />
  </div>
</template>

<script>
import HelloCeos from './components/HelloCeos.vue'
import Input from './components/Input.vue'

export default {
  name: 'app',
  components: {
    HelloCeos,
    Input
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
