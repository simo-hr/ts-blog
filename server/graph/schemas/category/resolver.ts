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
    createCategory (_, args: { name: string; parent_category_id?: string }) {
      const category = new Category(args)
      category.id = category._id.toString()
      return category.save()
    },
    updateCategory (_, args: { id: string; name: string; parent_category_id?: string }) {
      console.log('args.name:', args.name)
      console.log('args.parent_category_id:', args.parent_category_id)
      const updatedCategory = Category.findByIdAndUpdate(
        args.id,
        {
          $set: {
            name: args.name,
            parent_category_id: args.parent_category_id,
            updated_at: new Date(),
          },
        },
        { new: true, upsert: true, }
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
