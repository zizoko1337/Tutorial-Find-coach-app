import { createRouter, createWebHashHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesRegistration from './pages/coaches/CoachesRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

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
    { path: '/:notFound(.*)', component: NotFound }, //route that answers any incorrect urls to show error message
  ],
});

export default router; //export so it can be access in main.js
