<template>
  <div>
    <b-container fluid class="text-center">

      <div class="card mx-auto" style="max-width: 30rem;">
        <div class="card-header text-white bg-dark">
          <div class="d-inline float-left mt-2">
            {{ title }}
          </div>
          <div class="d-inline float-right">
            <b-button :pressed.sync="plus" variant="outline-light" class="font-weight-bold">+</b-button>
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>

      <b-pagination align="center" :total-rows="100" :per-page="5"
            v-model="currentPage" class="mt-3">
        </b-pagination>
      <br>

    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  data () {
    return {
      title: 'Articles',
      plus: false,
      currentPage: 3
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
