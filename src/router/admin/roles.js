export default [
    {
        path: 'roles/:id?',
        name: 'roles-index',
        component: () => import('../../views/admin/roles/IndexView'),
    },
    {
        path: 'roles/crear',
        name: 'roles-create',
        component: () => import('../../views/admin/roles/CreateView'),
    }
]