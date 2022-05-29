
const routes = [
  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    redirect: { name: 'Login' },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('src/pages/auth/Login.vue')
      }
    ]
  },

  {
    path: '/pokemons',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'PokemonsList',
        component: () => import('pages/pokemons/PokemonsList.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
