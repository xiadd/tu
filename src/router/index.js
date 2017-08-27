import Vue from 'vue'
import Router from 'vue-router'

const Hello = () => import(/* webpackChunkName: "group-foo" */'@/components/Hello')
const Home = () => import(/* webpackChunkName: "group-bar" */'@/components/Home')
const About = () => import(/* webpackChunkName: "group-bar" */'@/components/About')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
