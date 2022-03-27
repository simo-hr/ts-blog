import Category from './model'

const CategoryResolver = {
  Query: {
    category (_, { id, }: { id: string }) {
      const category = Category.findOne({ id, })
      return category
    },
    categories () {
      const categories = Category.find()
      return categories
    },
  },
  Mutation: {
    createCategory (_, args) {
      console.log('args:', args)
      const category = new Category(args.category)
      return category.save()
    },
    async updateCategory (_, args) {
      const category = await Category.findOne({ id: args.category.id, })

      if (category == null) {
        throw new Error('cannot find category')
      }
      if (category.parentCategoryIdIsMyself(args.parent_category_id)) {
        throw new Error('cannot set self id in parent_category_id')
      }

      const updatedCategory = await Category.findByIdAndUpdate(
        args.category.id,
        {
          $set: args.category,
        },
        { new: true, }
      )

      return updatedCategory
    },
    removeCategory (_, args) {
      return Category.findByIdAndRemove(args.id)
    },
  },
}

export default CategoryResolver
