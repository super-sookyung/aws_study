<template>
  <div>
    <input type="text" placeholder="please input text">
    <button onclick="clickPostRequestBtn">Post Request</button>
  </div>
</template>

<script>
export default {
  methods: {
    clickPostRequestBtn() {
      console.log("btn clicked")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>