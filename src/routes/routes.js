import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../views/HelloWorld/HelloWorld.vue'
// 此种方式引入即可实现路由懒加载
const TWO =  () => import('../view/two.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/two',
      name: 'TWO',
      component: TWO
    }
  ]
})