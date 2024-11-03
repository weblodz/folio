const routes = {
  withoutAuth: {
    home: '/',
    notFound: '/notFound',
    news: {
      path: '/news/:id',
      url: (id) => `/news/${id}`,
    },
    about: '/about',
  },
  withAuth: {},
}

export default routes
