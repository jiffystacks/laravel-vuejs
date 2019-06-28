export function initialize(store, router) {
  router.beforeEach((to, from, next) => {
      const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
      const currentUser = store.state.currentUser;
  
      if(requiresAuth && !currentUser) {
          next('/login');
      } else if(to.path == '/login' && currentUser) {
          next('/');
      } else {
          next();
      }
  });
  
  axios.interceptors.response.use(null, (error) => {
      if (error.resposne.status == 401) {
          store.commit('logout');
          router.push('/login');
      }

      return Promise.reject(error);
  });

  if (store.getters.currentUser) {
      setAuthorization(store.getters.currentUser.token);
  }
}

export function setAuthorization(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

export function login(credentials) {
  return new Promise((res, rej) => {
      axios.post('/api/login', credentials)
          .then((response) => {
              setAuthorization(response.data.access_token);
              res(response.data);
          })
          .catch((err) =>{
              rej("Wrong email or password");
          })
  })
}

export function getLocalUser() {
  const userStr = localStorage.getItem("user");

  if(!userStr) {
      return null;
  }

  return JSON.parse(userStr);
}