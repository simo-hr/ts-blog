import { gqlClient, } from '../../gql-client'
import { getStatement, } from '../common/arg'
import { GET_POST, } from './statement'

export default {
  async getPost (variables) {
    console.log('variables', variables)

    const gqls = GET_POST(variables.id)
    console.log(gqls)

    const result = await gqlClient.query(gqls, {
      ...variables,
    })
    return result
  },
}
