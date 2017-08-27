<template>
  <b-navbar toggleable="md" type="dark" variant="dark">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-navbar-brand href="#">
      <img src="../assets/logo.png" class="bar-logo">
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-nav is-nav-bar>
        <b-nav-item :to="{ name: 'Home' }">主页</b-nav-item>
        <b-nav-item :to="{ name: 'About' }">关于</b-nav-item>
      </b-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

<style>
  .bar-logo {
    width: 30px
  }
</style>
