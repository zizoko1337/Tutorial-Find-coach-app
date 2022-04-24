import { createRouter, createWebHashHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesRegistration from './pages/coaches/CoachesRegistration.vue';
import ContactCoach from './pages/request/ContactCoach.vue';
import RequestsReceived from './pages/request/RequestsReceived.vue';
import NotFound from './pages/NotFount.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches:id',
      component: CoachDetail,
      children: [
        { path: 'contact', component: ContactCoach }, //nested rout that allows contact from specific coach page. e.g. /coaches/c1/contact
      ],
    },
    { path: '/register', component: CoachesRegistration },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFount(.*)', component: NotFound }, //route that answers any incorrect urls to show error message
  ],
});

export default router; //export so it can be access in main.js
