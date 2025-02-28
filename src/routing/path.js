const routes = {
  withoutAuth: {
    home: '/',
    notFound: '/notFound',
    news: {
      path: '/news/:id',
      url: (id) => `/news/${id}`,
    },
    about: '/about',
    signIn: '/sign-in',
    signUp: '/sign-up'
  },
  withAuth: {
    profile: '/profile'
  },
}

export default routes
