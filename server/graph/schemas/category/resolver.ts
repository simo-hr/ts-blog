import mongoose from 'mongoose'
import { CategoryData, Category, } from '../../../../types'
import CategoryModel from './model'
export type SearchQuerySort<T> = { [Property in keyof Partial<T>]: -1 | 1 }

const CategoryResolver = {
  Query: {
    category (_, args: { id: string }) {
      const category = CategoryModel.findOne({ id: args.id, })
      return category
    },
    async categories (_, { limit, sort, }: { limit?: number; sort?: SearchQuerySort<Category> }) {
      console.log('🚀 ~ searchQuery')
      const searchQuery: mongoose.PipelineStage[] = [
        {
          $lookup: {
            from: 'categories',
            localField: 'parent_category_id',
            foreignField: 'id',
            as: 'parent_category',
          },
        },
        {
          $unwind: {
            path: '$parent_category',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $match: {},
        },
        { $limit: limit || 100, },
        { $sort: sort || { created_unixtime: -1, }, }
      ]
      const categories = await CategoryModel.aggregate(searchQuery).allowDiskUse(true).exec()
      return categories
    },
  },
  Mutation: {
    createCategory (_, args: { category: Omit<CategoryData, 'id'> }) {
      const category = new CategoryModel(args.category)
      return category.save()
    },
    async updateCategory (_, args: { category: CategoryData }) {
      const category = await CategoryModel.findOne({ id: args.category.id, })

      if (category == null) {
        throw new Error('cannot find category')
      }

      if (category.parentCategoryIdIsMyself(args.category.parent_category_id)) {
        throw new Error('cannot set self id in parent_category_id')
      }

      const updatedCategory = await CategoryModel.findByIdAndUpdate(
        args.category.id,
        {
          $set: args.category,
        },
        { new: true, }
      )

      return updatedCategory
    },
    async removeCategory (_, args: { id: string }) {
      return await CategoryModel.findByIdAndRemove(args.id)
    },
  },
}

export default CategoryResolver
