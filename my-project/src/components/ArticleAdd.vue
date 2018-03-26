<template>
  <div>
    <div class="container-fluid w-center">

      <b-form @submit="onSubmit" v-if="true" class="bg-light border rounded p-3">
        <h5 class="mb-2">{{form.title == "" ? "Nouvel article" : form.title}}</h5>
        <b-form-group>
          <b-form-input type="text"
                        v-model="form.title"
                        required
                        placeholder="Titre de l'article">
          </b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-textarea
                        v-model="form.content"
                        required
                        placeholder="Contenu de l'article">
          </b-form-textarea >
        </b-form-group>
        <b-button type="submit" variant="primary">Enregistrer</b-button>
      </b-form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleAdd',
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.w-center {
  max-width: 50rem;
}
</style>
