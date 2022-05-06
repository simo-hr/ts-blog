import mongoose from 'mongoose'
import CategoryModel from './model'
import { CategoryData, Category, } from '@/types'
import { SearchQuery, } from '@/types/graphql'

const CategoryResolver = {
  Query: {
    category (_, args: { id: string }) {
      const category = CategoryModel.findOne({ id: args.id, })
      return category
    },
    async searchCategories (_, { limit, sort, }: SearchQuery<Category>) {
      const pipeLines: mongoose.PipelineStage[] = [
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
        { $sort: sort || { created_unixtime: -1, }, }
      ]

      if (limit) {
        pipeLines.push({ $limit: limit, })
      }

      const categories = await CategoryModel.aggregate(pipeLines).allowDiskUse(true).exec()
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
