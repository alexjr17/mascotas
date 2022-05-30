import middleware from '../middleware';
import Mascotas from './mascotas'
import Roles from './roles'


export default [
    { 
        path: '/dashboard', 
        name: 'Dashboard', 
        component: () => import('../../views/admin/DashboardView.vue'),
        beforeEnter: middleware.guest,
        children: [
            {
                path: '',
                name: 'dashboard-index',
                component: () => import('../../views/admin/IndexView.vue'),
            }
        ].concat(
            Mascotas,
            Roles
        )
    }
]