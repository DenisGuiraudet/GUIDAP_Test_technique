<template>
  <div>
    <b-container fluid class="text-center">
      <h1 class="hello">{{ msg }}</h1>
      lol fsdf
      <div class="alert alert-primary">
        This is a primary alert—check it out! mdr
      </div>
      <b-button :pressed.sync="myToggle" variant="outline-primary">Toggle Me</b-button>
      <p>Pressed State: <strong>{{ myToggle }}</strong></p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ArticleAdd',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      myToggle: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
