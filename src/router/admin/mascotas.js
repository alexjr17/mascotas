export default [
    {
        path: 'mascotas',
        name: 'mascotas.index',
        component: () => import('../../views/admin/mascotas/IndexView.vue'),
    },
    {
        path: 'mascotas/create',
        name: 'mascotas.create',
        component: () => import('../../views/admin/mascotas/CreateView.vue'),
    },
    {
        path: 'mascotas/edit/:id',
        name: 'mascotas.edit',
        component: () => import('../../views/admin/mascotas/EditView.vue'),
    }
]