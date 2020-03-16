import Cookies from 'universal-cookie'

export default function ({ $axios, redirect }) {

  $axios.setBaseURL(process.env.API_URL)

  $axios.onRequest(config => {

    // APIキーが取得済みの場合
    const cookies = new Cookies()
    const accessToken = cookies.get('accessToken')

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    console.log('Making request to ' + config.url)
  })
}
