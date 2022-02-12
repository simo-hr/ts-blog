import { BASE_PATH, } from '~/utils/const'
import { isSignIn, getAdmin, removeAdmin, } from '~/utils/functions/auth'
import { RepositoryFactory, } from '~/api/gql/repositories'

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (isSignIn()) {
    const accessToken = getAdmin('accessToken')
    const result = await RepositoryFactory.Admin.checkAccessToken({ accessToken, })
    console.log('result:', result)
    if (!result || result.error?.message) {
      console.log('result.error?.messag:', result.error?.message)
      removeAdmin()
      return navigateTo({ path: `${BASE_PATH}admin/signin`, })
    }
  } else {
    return navigateTo({ path: `${BASE_PATH}admin/signin`, })
  }
})
