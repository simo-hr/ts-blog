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
    createCategory (_, { name, parentCategoryId = undefined, }: { name: string; parentCategoryId?: string }) {
      const category = new Category({
        name,
        parentCategoryId,
      })
      category.id = category._id.toString()
      category.updatedAt = new Date()
      return category.save()
    },
    updateCategory (_, args) {
      const updatedCategory = Category.findByIdAndUpdate(
        args.id,
        {
          $set: {
            name: args.name,
            updatedAt: new Date(),
          },
        },
        { new: true, }
      )
      return updatedCategory
    },
    removeCategory (_, args) {
      const updatedCategory = Category.findByIdAndUpdate(
        args.id,
        {
          $set: {
            title: args.title,
          },
        },
        { new: true, }
      )
      return updatedCategory
    },
  },
}

export default CategoryResolver
