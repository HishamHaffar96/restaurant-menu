import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router/routes';

// Create a router instance with history mode
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    mode: 'history', // Enable HTML5 history mode
    scrollBehavior(to, from, savedPosition) {
        // Scroll behavior configuration
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});

// Create a Vue app instance
const app = createApp(App);

// Use the router in the app
app.use(router);

// Mount the app to the specified element in the HTML file
app.mount('#app');