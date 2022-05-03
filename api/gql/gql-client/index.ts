import { createClient, } from '@urql/vue'
import Cookie from 'cookie-universal'

const cookies = Cookie()

const gqlClient = {
  client () {
    const config = useRuntimeConfig()
    return createClient({
      url: config.GRAPHQL_ENDPOINT,
      maskTypename: true,
      fetchOptions: () => {
        const token = cookies.get('access_token') || 'aaaa'
        return {
          headers: { authorization: token ? `Bearer ${token}` : '', },
        }
      },
    })
  },
  async query (statement, variables) {
    const result = await this.client()
      .query(statement, { ...variables, })
      .toPromise()
    return result
  },
  async mutation (statement, variables) {
    const result = await this.client()
      .mutation(statement, {
        ...variables,
      })
      .toPromise()
    return result
  },
}

export { gqlClient, }
