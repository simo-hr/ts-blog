import { gqlClient, } from '../../gql-client'
import { getStatement, } from '../common/arg'
import { GET_CATEGORY, GET_CATEGORIES, CREATE_CATEGORY, UPDATE_CATEGORY, } from './statement'

export default {
  async getCategory (variables: { id: string }) {
    const gqls = getStatement(GET_CATEGORY, variables)
    const result = await gqlClient.query(gqls, {
      ...variables,
    })
    return result
  },
  async getCategories () {
    const gqls = getStatement(GET_CATEGORIES, {})
    const result = await gqlClient.query(gqls, {})
    return result
  },
  async createCategory (variables: { name: string; parent_category_id?: string }) {
    const gqls = getStatement(CREATE_CATEGORY, variables)
    const result = await gqlClient.mutation(gqls, {})
    return result
  },
  async updateCategory (variables: { id: string; name: string; parent_category_id?: string }) {
    const gqls = getStatement(UPDATE_CATEGORY, variables)
    const result = await gqlClient.mutation(gqls, {})
    return result
  },
}
