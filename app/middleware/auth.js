import Cookies from 'universal-cookie'

export default async ({ req, store, redirect }) => {

  if (process.client){
    return
  }

  if(req && req.headers && req.headers.cookie){
    // your code
    const cookies = new Cookies(req.headers.cookie)
    const currentUser = cookies.get('currentUser')
    if (currentUser && currentUser.id ){
      store.commit('user/setCurrentUser', currentUser, { root: true })
    } else {
      return redirect('/login')
    }
  }
}
