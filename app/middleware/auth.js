import Cookies from 'universal-cookie'

export default async ({ req, store, redirect }) => {

  if (process.client){
    return
  }

  if(req && req.headers && req.headers.cookie){
    return
  }

  const cookies = new Cookies(req.headers.cookie)
  const currentUser = cookies.get('currentUser')
  const accessToken = cookies.get('accessToken')
  if (accessToken && currentUser && currentUser.id ){
    store.commit('user/setCurrentUser', currentUser)
    store.commit('user/setAccessToken', accessToken)
  } else {
    redirect('/login')
  }
}
