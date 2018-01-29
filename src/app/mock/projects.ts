export const projects = [
    {
        id: 'xDdef',
        name: 'My AIS',
        database: [
            {
                id: '001',
                username: 'passakorn$zaza',
                password: '0642178812'
            },
            {
                id: '002',
                username: 'jojo_eiei',
                password: 'eiei123'
            }
        ],
        folders: [
            {
                id: 'xHgbfVl',
                name: 'Account',
                countEndpoints: 3,
                endpoints: [
                    'fG52Rbrh8',
                    'H90Lhf9Dv',
                    'ngH95Fjds'
                ]
            },
            {
                id: 'jHpjvSc',
                name: 'Promotion',
                countEndpoints: 2,
                endpoints: [
                    'j8hlsHov2',
                    'l7Hinv93a'
                ]
            },
            {
                id: 'CdcGhlw',
                name: 'Payment',
                countEndpoints: 1,
                endpoints: [
                    'l7Hinv93a'
                ]
            },
            {
                id: 'nBjGdrL',
                name: 'Order',
                countEndpoints: 1,
                endpoints: [
                    'j8hlsHov2',
                ]
            },
        ],
        endpoints: [
            {
                id: 'fG52Rbrh8',
                method: 'GET',
                name: 'Verify account',
                path: '/verify-account/{user-id}'
            },
            {
                id: 'H90Lhf9Dv',
                method: 'POST',
                name: 'Upgrade promotion',
                path: '/upgrade-promotion/{user-id}/{promotion-id}'
            },
            {
                id: 'ngH95Fjds',
                method: 'PUT',
                name: 'Verify promotion',
                path: '/verify-promotion'
            },
            {
                id: 'j8hlsHov2',
                method: 'PATCH',
                name: 'Cancel promotion',
                path: '/cancel-promotion'
            },
            {
                id: 'l7Hinv93a',
                method: 'DELETE',
                name: 'Checkout',
                path: '/checkout'
            },
        ]
    },
    {
        id: 'GjnFs',
        name: 'My Channel',
        database: [
            {
                email: 'passakorn.zaza@gmail',
                password: '0642178812'
            },
            {
                email: 'jojo.eiei@world.com',
                password: 'eiei123'
            }
        ],
        folders: [
            {
                id: 'xHgbfVl',
                name: 'Account',
                countEndpoints: 4,
                endpoints: [
                    'fG52Rbrh8',
                    'H90Lhf9Dv',
                    'ngH95Fjds',
                    'l7Hinv93a'
                ]
            },
            {
                id: 'jHpjvSc',
                name: 'Promotion',
                countEndpoints: 2,
                endpoints: [
                    'j8hlsHov2',
                    'l7Hinv93a'
                ]
            },
            {
                id: 'CdcGhlw',
                name: 'Payment',
                countEndpoints: 1,
                endpoints: [
                    'l7Hinv93a'
                ]
            },
            {
                id: 'nBjGdrL',
                name: 'Order',
                countEndpoints: 1,
                endpoints: [
                    'j8hlsHov2',
                ]
            },
        ],
        endpoints: [
            {
                id: 'fG52Rbrh8',
                method: 'GET',
                name: 'Verify account',
                path: '/verify-account/{user-id}'
            },
            {
                id: 'H90Lhf9Dv',
                method: 'POST',
                name: 'Upgrade promotion',
                path: '/upgrade-promotion/{user-id}/{promotion-id}'
            },
            {
                id: 'ngH95Fjds',
                method: 'PUT',
                name: 'Verify promotion',
                path: '/verify-promotion'
            },
            {
                id: 'j8hlsHov2',
                method: 'PATCH',
                name: 'Cancel promotion',
                path: '/cancel-promotion'
            },
            {
                id: 'l7Hinv93a',
                method: 'DELETE',
                name: 'Checkout',
                path: '/checkout'
            },
        ]
    },
    {
        id: 'FGrbS',
        name: 'My Room',
        database: [
            {
                id: '001',
                name: 'Sweet room',
                price: 3500
            },
            {
                id: '002',
                name: 'Family room',
                price: 1200
            }
        ],
        folders: [
            {
                id: 'xHgbfVl',
                name: 'Account',
                countEndpoints: 5,
                endpoints: [
                    'fG52Rbrh8',
                    'H90Lhf9Dv',
                    'ngH95Fjds',
                    'j8hlsHov2',
                    'l7Hinv93a'
                ]
            },
            {
                id: 'jHpjvSc',
                name: 'Promotion',
                countEndpoints: 2,
                endpoints: [
                    'j8hlsHov2',
                    'l7Hinv93a'
                ]
            },
            {
                id: 'CdcGhlw',
                name: 'Payment',
                countEndpoints: 1,
                endpoints: [
                    'l7Hinv93a'
                ]
            },
            {
                id: 'nBjGdrL',
                name: 'Order',
                countEndpoints: 1,
                endpoints: [
                    'j8hlsHov2',
                ]
            },
        ],
        endpoints: [
            {
                id: 'fG52Rbrh8',
                method: 'GET',
                name: 'Verify account',
                path: '/verify-account/{user-id}'
            },
            {
                id: 'H90Lhf9Dv',
                method: 'POST',
                name: 'Upgrade promotion',
                path: '/upgrade-promotion/{user-id}/{promotion-id}'
            },
            {
                id: 'ngH95Fjds',
                method: 'PUT',
                name: 'Verify promotion',
                path: '/verify-promotion'
            },
            {
                id: 'j8hlsHov2',
                method: 'PATCH',
                name: 'Cancel promotion',
                path: '/cancel-promotion'
            },
            {
                id: 'l7Hinv93a',
                method: 'DELETE',
                name: 'Checkout',
                path: '/checkout'
            },
        ]
    }
]