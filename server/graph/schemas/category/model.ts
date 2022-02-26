import mongoose from 'mongoose'

const MSchema = mongoose.Schema

const categorySchema = new MSchema({
  id: { type: String, required: true, unique: true, },
  name: { type: String, required: true, unique: true, },
  parent_category_id: String,
  created_at: { type: Number, required: true, default: new Date(), },
  created_unixtime: { type: Number, required: true, default: Date.now, },
  updated_at: { type: Number, required: true, default: Date.now, },
  updated_unixtime: { type: Number, required: true, default: new Date(), },
})

categorySchema.methods.parentCategoryIdIsMe = function (parentCategoryId) {
  return this.id === parentCategoryId
}

const Category = mongoose.model('Category', categorySchema)

export default Category
