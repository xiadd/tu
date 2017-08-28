<template>
  <div class="container-fluid home-page">
    <dropzone id="myVueDropzone" url="/upload" paramName="outfile" acceptedFileTypes="image/*" v-on:vdropzone-success="showSuccess">
    </dropzone>
    <b-card no-body class="result-link" v-if="showResultLink">
      <b-tabs small card ref="tabs">
        <b-tab title="Origin">
          <pre>
            <p v-for="link in resultLinks" :key="link.url">{{ link.url }}</p>
          </pre>
        </b-tab>
        <b-tab title="HTML">
          <pre>
            <p v-for="link in resultLinks" :key="link.url">{{ link.html }}</p>
          </pre>
        </b-tab>
        <b-tab title="Markdown">
          <pre>
            <p v-for="link in resultLinks" :key="link.url">{{ link.markdown }}</p>
          </pre>
        </b-tab>
        <b-tab title="BBcode">
          <pre>
            <p v-for="link in resultLinks" :key="link.url">{{ link.bbcode }}</p>
          </pre>
        </b-tab>
      </b-tabs>
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
      showResultLink: false,
      resultLinks: []
    }
  }, 
  methods: {
    showSuccess: function(file, response) {
      if (response.code === 'success') {
        this.showResultLink = true
        this.resultLinks.push({
          filename: response.data.filename,
          url: response.data.url,
          html: `<img src="${response.data.url}" alt="${response.data.filename}" />`,
          markdown: `![${response.data.filename}](${response.data.url})`,
          bbcode: `[img]${response.data.url}[/img]`
        })
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
