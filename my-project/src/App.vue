<template>
  <div class="main">
    <b-container fluid class="text-center my-5">
      <router-link to="/">
        <img :src="logo">
      </router-link>
    </b-container>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      logo: 'https://guidap.co/wp-content/uploads/2017/09/logo-mini-jaune-sans-fond.png'
    }
  }
}
</script>

<style>
:root {
  background: no-repeat center center;
  background-image: url(./assets/TexturesCom_Ivy0136_3_M.jpg);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100vh;
}
body {
  background-color: unset;
}
</style>
