<template>
  <div class="container-fluid about-page">
    <h2>关于 OUT.IM 图床</h2>
    <p>在法律允许范围内，请随意使用本图床。</p>
    <h2>严禁上传及分享如下类型的图片：</h2>
    <ul>
      <li>含有色情、暴力、宣扬恐怖主义的图片</li>
      <li>侵犯版权、未经授权的图片</li>
      <li>其他违反中华人民共和国法律的图片</li>
      <li>其他违反香港法律的图片</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'about',
  data () {
    return {
      msg: 'About'
    }
  }, 
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-page {
  margin-top: 2rem
}
h1, h2 {
  font-weight: normal;
}


a {
  color: #42b983;
}
</style>
