<template>
  <div>
    <h1 class="hello">{{ msg }}</h1>
    lol fsdf
    <div class="alert alert-primary">
      This is a primary alert—check it out! lol
    </div>
    <b-button :pressed.sync="myToggle" variant="outline-primary">Toggle Me</b-button>
    <p>Pressed State: <strong>{{ myToggle }}</strong></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
