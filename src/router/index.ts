import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ScheduleList from '../pages/ScheduleList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/schedule-list',
    name: 'ScheduleList',
    component: ScheduleList
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})