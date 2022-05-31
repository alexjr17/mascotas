const navItems = [
    { 
        titulo: 'Dashboard',
        route:'dashboard.index',
        can: 'ver dashboard',
        subroute: []
    },
    { 
        titulo: 'Mascotas',
        route:'mascotas.index',
        can: 'listar mascotas',
        subroute: [
        ]
    },
    { 
        titulo: 'Roles',
        route:'roles.index',
        can: 'listar roles',
        subroute: []
    },
    { 
        titulo: 'Usuarios',
        route:'users.index',
        can: 'listar users',
        subroute: []
    },
];
export default navItems