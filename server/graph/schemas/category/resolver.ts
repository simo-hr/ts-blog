import { CategoryData, } from '../../../../types'
import CategoryModel from './model'

const CategoryResolver = {
  Query: {
    category (
      _,
      args: {
        id: string
      }
    ) {
      const category = CategoryModel.findOne({ id: args.id, })
      return category
    },
    categories () {
      const categories = CategoryModel.find()
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
    removeCategory (_, args) {
      return CategoryModel.findByIdAndRemove(args.id)
    },
  },
}

export default CategoryResolver
