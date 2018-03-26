<template>
  <div>
    <div class="container-fluid">

      <div class="card mx-auto w-center">
        <div class="card-header text-white bg-dark">
          <h5 class="d-inline float-left mt-2 mb-0">
            {{ title }}
          </h5>
          <div class="d-inline float-right">
            <b-button :pressed.sync="plus" variant="outline-light"
              to="/add" class="font-weight-bold">+</b-button>
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li v-for="(item, index) in pageList()" v-bind:key="index" class="list-group-item">
            <router-link :to="routerTo(item.id)">
              <h5 class="card-title text-truncate">{{item.title}}</h5>
            </router-link>
            <p class="card-text">{{item.body.length >= 100 ? item.body.slice(0, 100) + "..." : item.body}}</p>
          </li>
        </ul>
      </div>

      <b-pagination-nav align="center" :limit="1"
          :link-gen="linkGen" :page-gen="pageGen" :number-of-pages="Math.ceil(list.length / perPage)"
          v-model="currentPage" class="mt-3 mx-auto">
      </b-pagination-nav>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  data () {
    return {
      title: 'Articles',
      plus: false,
      currentPage: 1,
      perPage: 5,
      list: []
    }
  },
  methods: {
    linkGen (pageNum) {
      return ''
    },
    pageGen (pageNum) {
      return ('Page ' + pageNum + '/' + Math.ceil(this.list.length / this.perPage))
    },
    pageList () {
      let min = (this.currentPage * this.perPage) - this.perPage
      let max = (this.currentPage * this.perPage)
      return this.list.slice(min, max)
    },
    getData () {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        this.list = response.body
      }, error => {
        console.log(error)
      })
    },
    routerTo (id) {
      return ('/change/' + id)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.w-center {
  max-width: 30rem;
}
</style>
