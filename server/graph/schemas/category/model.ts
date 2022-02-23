import mongoose from 'mongoose'

const MSchema = mongoose.Schema

const categorySchema = new MSchema({
  id: { type: String, required: true, unique: true, },
  name: { type: String, required: true, unique: true, },
  parent_category_id: String,
  updated_at: { type: Date, required: true, default: Date.now, },
})

const Category = mongoose.model('Category', categorySchema)

export default Category
