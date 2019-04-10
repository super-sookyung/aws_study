<template>
  <div>
    <input
      type="text"
      name="name"
      v-model="name"
      placeholder="What is your name">
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password">
    <br>
    <button
      @click="posttest">
      Post Request
    </button>
  </div>
</template>

<script>
import AwsService from '@/services/AwsService'

export default {
  data() {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    async posttest() {
      const response = await AwsService.posttest({
        name: this.name,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>