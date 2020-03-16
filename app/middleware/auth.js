import Cookies from 'universal-cookie'

export default async ({ req, store, redirect }) => {

  if (process.client){
    return
  }
  const cookies = new Cookies(req.headers.cookie)
  const currentUser = cookies.get('currentUser')
  if (currentUser && currentUser.id ){
    store.commit('user/setCurrentUser', currentUser, { root: true })
  } else {
    redirect('/login')
  }
}
