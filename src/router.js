import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';

const routes = [
    {
        path: '/',
        redirect: '/Home' 
    },
    {
      path: '/Home',
      name: 'Home',
      component: HomeComponent
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;