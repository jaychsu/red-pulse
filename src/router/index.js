import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import GetData from '@/components/GetData';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: window.location.pathname,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/get-data-from-vuex',
      name: 'GetData',
      component: GetData,
    },
  ],
});
