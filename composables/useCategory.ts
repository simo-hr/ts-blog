import { Category, CategoryData, } from '../types/index'
import { RepositoryFactory, } from '@/api/gql/repositories'

export const useCategory = () => {
  const categoryAll = async (): Promise<{ categories: Category[]; error: unknown }> => {
    let categories: Category[] = []
    let error: unknown
    const resCategories = await RepositoryFactory.Category.getCategories()
    if (resCategories.error) {
      error = resCategories.error
    } else {
      categories = resCategories.data.categories
    }

    return { categories, error, }
  }

  const categoryCreateOne = async (
    _category: Omit<CategoryData, 'id'>
  ): Promise<{ category: CategoryData; error: unknown }> => {
    let category: CategoryData
    let error: unknown
    const resCategory = await RepositoryFactory.Category.createCategory({ category: _category, })
    console.log('🚀 ~ resCategory', resCategory)
    if (resCategory.error) {
      error = resCategory.error
    } else {
      category = resCategory.data.createCategory
    }

    return { category, error, }
  }
  const categoryUpdateOne = async (input: CategoryData): Promise<{ category: CategoryData; error: unknown }> => {
    console.log('🚀 ~ input', input)
    let category: CategoryData
    let error: unknown
    const res = await RepositoryFactory.Category.updateCategory({ category: input, })
    if (res.error) {
      error = res.error
    } else {
      category = res.data.updateCategory
    }

    return { category, error, }
  }

  const categoryDelete = async (id: string): Promise<{ error: unknown }> => {
    let error: unknown = {}
    const res = await RepositoryFactory.Category.removeCategory({ id, })
    if (res.error) {
      error = res.error
    }
    return { error, }
  }

  return {
    categoryAll,
    categoryCreateOne,
    categoryUpdateOne,
    categoryDelete,
  }
}
