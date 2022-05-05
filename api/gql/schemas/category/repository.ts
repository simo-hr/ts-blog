import { gqlClient, } from '../../gql-client'
import { getStatement, } from '../common/arg'
import { GET_CATEGORY, SEARCH_CATEGORIES, CREATE_CATEGORY, UPDATE_CATEGORY, REMOVE_CATEGORY, } from './statement'
import { CategoryData, Category, } from '@/types'
import { SearchQuery, } from '@/types/graphql'

export default {
  async getCategory (variables: { id: string }) {
    const gqlStatement = getStatement(GET_CATEGORY, variables)
    const result = await gqlClient.query(gqlStatement, {
      ...variables,
    })
    return result
  },
  async searchCategories (variables: SearchQuery<Category>) {
    const result = await gqlClient.query(SEARCH_CATEGORIES(), variables)
    return result
  },
  async createCategory (variables: { category: Omit<CategoryData, 'id'> }) {
    const gqlStatement = CREATE_CATEGORY()
    const result = await gqlClient.mutation(gqlStatement, variables)
    return result
  },
  async updateCategory (variables: { category: CategoryData }) {
    const gqlStatement = UPDATE_CATEGORY()
    const result = await gqlClient.mutation(gqlStatement, variables)
    return result
  },
  async removeCategory (variables: { id: string }) {
    const gqlStatement = getStatement(REMOVE_CATEGORY, variables)
    const result = await gqlClient.mutation(gqlStatement, {})
    return result
  },
}
