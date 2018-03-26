<template>
  <div>
    <div class="container-fluid w-center">

      <b-form @submit="onSubmit" v-if="true" class="bg-light border rounded p-3">
        <h5 class="mb-2">{{this.$el.id}} : {{form.title}}</h5>
        <b-form-group>
          <b-form-input type="text"
                        v-model="form.title"
                        required
                        placeholder="Titre de l'article">
          </b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input type="text"
                        v-model="form.content"
                        required
                        placeholder="Contenu de l'article">
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Enregistrer</b-button>
      </b-form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleChange',
  data () {
    return {
      form: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      if (this.form.title !== '' && this.form.content !== '') {
        alert(JSON.stringify(this.form))
        this.form.title = ''
        this.form.content = ''
      }
    },
    getData () {
      this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.$el.id).then(response => {
        this.form.title = response.body.title
        this.form.content = response.body.body
      }, error => {
        console.log(error)
      })
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
  max-width: 50rem;
}
</style>
