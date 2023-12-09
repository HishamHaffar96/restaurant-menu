// Import the Home component
import Home from '../views/Home.vue';

// Define your routes
const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            // You can add meta information here if needed
        },
    },
    // Add other routes as needed
];

// Export the routes
export default routes;