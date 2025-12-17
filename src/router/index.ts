import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import ChatView from '../components/ChatView.vue';
import IndexPage from '@/pages/index.vue';
import { useChatStore } from '@/stores/app';

const routes = [
  { path: '/', component: IndexPage },
  { path: '/chat/:id', name: 'chat', component: ChatView },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
});

router.beforeEach((to, from, next) => {
  if (to.name === 'chat') {
    const chatStore = useChatStore();
    const chatId = to.params.id;
    if (!chatStore.chats[chatId]) {
      return next({ path: '/' });
    }
  }
  next();
});

router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err);
    } else {
      console.log('Reloading page to fix dynamic import error');
      localStorage.setItem('vuetify:dynamic-reload', 'true');
      location.assign(to.fullPath);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload');
});

export default router;
