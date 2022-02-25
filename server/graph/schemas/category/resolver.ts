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
    async updateCategory (_, args: { id: string; name: string; parent_category_id?: string }) {
      const category = await Category.findOne({ id: args.id, })

      if (category == null) {
        throw new Error('cannot find category')
      }
      if (category.parentCategoryIdIsMe(args.parent_category_id)) {
        throw new Error('cannot set self id in parent_category_id')
      }

      return await Category.findByIdAndUpdate(
        args.id,
        {
          $set: {
            name: args.name,
            parent_category_id: args.parent_category_id,
            updated_at: new Date(),
          },
        },
        { new: true, }
        // ,
        // (error, category) => {
        //   if (error) {
        //     console.error('error.message:', error.message)
        //     throw error
        //   }
        //   console.log('category:', category)
        //   return category
        // }
      ).then((category) => {
        return category
      }).catch((error) => {
        throw error
      })
      // console.log('updatedCategory:', updatedCategory)
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
