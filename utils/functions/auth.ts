import Cookie from 'cookie-universal'

export const setAdmin = (admin: { id: string; email: string; accessToken: string }): void => {
  const cookies = Cookie()
  cookies.set('id', admin.id)
  cookies.set('email', admin.email)
  cookies.set('accessToken', admin.accessToken)
}

export const isSignIn = (): boolean => {
  return getAdmin('accessToken') !== ''
}

export const getAdmin = (key: string): string => {
  const cookies = Cookie()
  const value = cookies.get(key)
  if (typeof value !== 'string') {
    return ''
  }
  return value
}

export const removeAdmin = (): void => {
  const cookies = Cookie()
  cookies.remove('id')
  cookies.remove('email')
  cookies.remove('accessToken')
}
