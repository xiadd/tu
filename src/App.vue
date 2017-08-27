<template>
  <div id="app">
    <x-nav></x-nav>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import XNav from '@/components/Nav.vue'
export default {
  name: 'app',
  data () {
    return {
      name: 'xiadd'
    }
  },
  components: {
    XNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden
}
.fade-enter-active, .fade-leave-active {
  transition-duration: .2s;
}

.fade-enter-active {
  transition-delay: .2s;
}

.fade-enter {
  transform: scale(1.1);
  opacity: 0;
} 
.fade-leave-active {
  transform: scale(1.1);
  opacity: 0;
}
</style>
