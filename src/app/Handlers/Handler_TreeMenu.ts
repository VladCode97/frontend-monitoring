import FoodNode from '../Interfaces/Tree_Interface';

class MockUpTree {

    public TREE_DATA: FoodNode[];
    public TREE_DATA_USERS: FoodNode[];
    public TREE_DATA_USER: FoodNode[];

    constructor() {
        this.TREE_DATA = [
            {

                name: 'Gestion de clientes',
                children: [
                    {
                        name: 'Crear cliente',
                        link: '/admin/create/clients',
                    },
                    {
                        name: 'Lista de clientes',
                        link: '/admin/view/clients',
                    },
                    {
                        name: 'Actualizar cliente',
                        link: '/admin/update/client',
                    },
                ]
            }];
        this.TREE_DATA_USERS = [
            {
                name: 'Gestion de Usuarios',
                children: [
                    {
                        name: 'Crear Usuario',
                        link: '/admin/create/users',
                        icon: 'create'
                    },
                    {
                        name: 'Lista Usuarios',
                        link: '/admin/view/users',
                        icon: 'list'
                    }
                ]
            }
        ];
        this.TREE_DATA_USER = [
            {
                name: 'Gestion de Clientes',
                children: [
                    {
                        name: 'Lista clientes',
                        link: '/user/view/users',
                        icon: 'list'
                    }
                ]
            }
        ]
    }

    get treeDataClients(): FoodNode[] {
        return this.TREE_DATA;
    }

    get treeDataUser(): FoodNode[] {
        return this.TREE_DATA_USERS;
    }
}

const handlerTree = new MockUpTree();
export default handlerTree;