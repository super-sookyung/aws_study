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
    <div class="response" v-html="response" />
    <br>
    <div class="error" v-html="error" />
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
      password: '',
      error: null,
      response: null,
    }
  },
  methods: {
    async posttest() {
      this.error = null
      this.response = null
      try {
        const response = await AwsService.posttest({
          name: this.name,
          password: this.password
        })
        this.response = response.data.message
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>