import { Category, CategoryData, } from '../types/index'
import { RepositoryFactory, } from '@/api/gql/repositories'
import { SearchQuery, } from '@/types/graphql'

type UseCategory = () => {
  categoryById: (id: string) => Promise<{ category: CategoryData; error: unknown }>
  categorySearch: ({ limit, sort, }?: SearchQuery<Category>) => Promise<{ categories: Category[]; error: unknown }>
  categoryCreateOne: (_category: Omit<CategoryData, 'id'>) => Promise<{ category: CategoryData; error: unknown }>
  categoryUpdateOne: (input: CategoryData) => Promise<{ category: CategoryData; error: unknown }>
  categoryDelete: (id: string) => Promise<{ error: unknown }>
}

export const useCategory: UseCategory = () => {
  const categoryById = async (id: string): Promise<{ category: CategoryData; error: unknown }> => {
    let category: Category
    let error: unknown
    const res = await RepositoryFactory.Category.getCategory({ id, })
    if (res.error) {
      error = res.error
    } else {
      category = res.data.category
    }

    return { category, error, }
  }

  const categorySearch = async ({
    limit,
    sort,
  }: SearchQuery<Category>): Promise<{ categories: Category[]; error: unknown }> => {
    let categories: Category[] = []
    let error: unknown
    const resCategories = await RepositoryFactory.Category.searchCategories({
      limit,
      sort,
    })
    if (resCategories.error) {
      error = resCategories.error
    } else {
      categories = resCategories.data.searchCategories
    }

    return { categories, error, }
  }

  const categoryCreateOne = async (
    _category: Omit<CategoryData, 'id'>
  ): Promise<{ category: CategoryData; error: unknown }> => {
    let category: CategoryData
    let error: unknown
    const resCategory = await RepositoryFactory.Category.createCategory({ category: _category, })
    if (resCategory.error) {
      error = resCategory.error
    } else {
      category = resCategory.data.createCategory
    }

    return { category, error, }
  }
  const categoryUpdateOne = async (input: CategoryData): Promise<{ category: CategoryData; error: unknown }> => {
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
    categoryById,
    categorySearch,
    categoryCreateOne,
    categoryUpdateOne,
    categoryDelete,
  }
}
