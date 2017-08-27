<template>
  <div class="container-fluid home-page">
    <dropzone id="myVueDropzone" url="/upload" paramName="outfile" acceptedFileTypes="image/*" v-on:vdropzone-success="showSuccess">
    </dropzone>
    <b-card class="text-center result-link" v-if="resultLink">
      {{ resultLink }}
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Dropzone from 'vue2-dropzone'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Home!',
      resultLink: false
    }
  }, 
  methods: {
    showSuccess: function(file, response) {
      console.log(response)
      if (response.code === 'success') {
        this.resultLink = response.data.url
      }
    }
  },
  components: {
    Dropzone
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.result-link {
  margin-top: 2rem
}
.home-page {
  margin-top: 2rem
}
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
