
import middleware from '../middleware';

export default [
    { 
        path: '/login', 
        name: 'Login',
        components: {
                Login: () => import('../../views/auth/LoginView.vue'),
            },
        beforeEnter: middleware.user
    },
    { 
        path: '/register', 
        name: 'Register', 
        components: {
                // default: () => import('../../views/auth/RegisterView.vue'),
                Register: () => import('../../views/auth/RegisterView.vue'),
          },
        beforeEnter: middleware.user
    }
]