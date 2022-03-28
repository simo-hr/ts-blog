import { gqlClient, } from '../../gql-client'
import { getStatement, } from '../common/arg'
import { GET_POST, GET_POSTS, CREATE_POST, UPDATE_POST, REMOVE_POST, } from './statement'

export default {
  async getPost (variables: { id: string }) {
    const gqls = getStatement(GET_POST, variables)
    const result = await gqlClient.query(gqls, {
      ...variables,
    })
    return result
  },
  async getPosts () {
    const gqls = getStatement(GET_POSTS, {})
    const result = await gqlClient.query(gqls, {})
    return result
  },
  async createPost (variables) {
    const gqls = CREATE_POST()
    const result = await gqlClient.mutation(gqls, variables)
    return result
  },
  async updatePost (variables) {
    const gqls = UPDATE_POST()
    const result = await gqlClient.mutation(gqls, variables)
    return result
  },
  async removePost (variables: { id: string }) {
    const gqls = getStatement(REMOVE_POST, variables)
    const result = await gqlClient.mutation(gqls, {})
    return result
  },
}
