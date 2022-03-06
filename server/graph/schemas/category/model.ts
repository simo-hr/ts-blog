import mongoose from 'mongoose'

const MSchema = mongoose.Schema

const categorySchema = new MSchema({
  id: { type: String, required: true, unique: true, },
  name: { type: String, required: true, unique: true, },
  parent_category_id: String,
  posts: [{ type: mongoose.Types.ObjectId, ref: 'Category', }],
  created_unixtime: { type: Number, required: true, default: new Date(), },
  updated_unixtime: { type: Number, required: true, default: new Date(), },
})

categorySchema.methods.parentCategoryIdIsMe = function (parentCategoryId) {
  return this.id === parentCategoryId
}

const Category = mongoose.model('Category', categorySchema)

export default Category
