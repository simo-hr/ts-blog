import Cookie from 'cookie-universal'

export const setAdmin = (_admin) => {
  const cookies = Cookie()
  cookies.set('id', _admin.id)
  cookies.set('email', _admin.email)
  cookies.set('accessToken', _admin.accessToken)
}

export const isSignIn = () => {
  const cookies = Cookie()
  return cookies.get('accessToken') !== ''
}

export const getAdmin = (key = '') => {
  const cookies = Cookie()
  return cookies.get(key)
}

export const removeAdmin = () => {
  const cookies = Cookie()
  cookies.remove('id')
  cookies.remove('email')
  cookies.remove('accessToken')
}
