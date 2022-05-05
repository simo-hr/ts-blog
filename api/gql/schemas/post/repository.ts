import { gqlClient, } from '../../gql-client'
import { getStatement, } from '../common/arg'
import { GET_POST, GET_POSTS, CREATE_POST, UPDATE_POST, REMOVE_POST, } from './statement'

export default {
  async getPost (variables: { id: string }) {
    const gqlStatement = getStatement(GET_POST, variables)
    const result = await gqlClient.query(gqlStatement, {
      ...variables,
    })
    return result
  },
  async getPosts () {
    const gqlStatement = getStatement(GET_POSTS, {})
    const result = await gqlClient.query(gqlStatement, {})
    return result
  },
  async createPost (variables) {
    const result = await gqlClient.mutation(CREATE_POST(), variables)
    return result
  },
  async updatePost (variables) {
    const result = await gqlClient.mutation(UPDATE_POST(), variables)
    return result
  },
  async removePost (variables: { id: string }) {
    const result = await gqlClient.mutation(REMOVE_POST(), variables)
    return result
  },
}
