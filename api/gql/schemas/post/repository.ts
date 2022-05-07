import { gqlClient, } from '../../gql-client'
import { getStatement, } from '../common/arg'
import { GET_POST, SEARCH_POSTS, CREATE_POST, UPDATE_POST, REMOVE_POST, } from './statement'
import { PostData, Post, } from '@/types'
import { SearchQuery, } from '@/types/graphql'

export default {
  async getPost (variables: { id: string }) {
    const gqlStatement = getStatement(GET_POST, variables)
    const result = await gqlClient.query(gqlStatement, {
      ...variables,
    })
    return result
  },
  async searchPosts (variables: SearchQuery<Post>) {
    const result = await gqlClient.query(SEARCH_POSTS(), variables)
    return result
  },
  async createPost (variables: { post: Omit<PostData, 'id'> }) {
    const result = await gqlClient.mutation(CREATE_POST(), variables)
    return result
  },
  async updatePost (variables: { post: PostData }) {
    const result = await gqlClient.mutation(UPDATE_POST(), variables)
    return result
  },
  async removePost (variables: { id: string }) {
    const result = await gqlClient.mutation(REMOVE_POST(), variables)
    return result
  },
}
