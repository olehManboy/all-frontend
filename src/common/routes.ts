import getConfig from 'next/config'

const {
  publicRuntimeConfig: { APP_URL },
} = getConfig()

export const baseUrl = APP_URL

export const routes = {
  index: '/',
  about: '/about',
  login: '/login',
  logout: '/logout',
  support: '/support',
  profile: '/profile',
  register: '/register',
  aboutProject: '/about-project',
  changePassword: '/change-password',
  forgottenPassword: '/forgotten-password',
}
