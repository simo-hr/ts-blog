import mongoose from 'mongoose'

const MSchema = mongoose.Schema

const categorySchema = new MSchema({
  id: {
    type: String,
    required: true,
    unique: true,
    default () {
      return this._id.toString()
    },
  },
  name: { type: String, required: true, unique: true, },
  parent_category_id: String,
  posts: [{ type: mongoose.Types.ObjectId, ref: 'Post', }],
  created_unixtime: { type: Number, required: true, default: new Date().getTime(), },
  updated_unixtime: {
    type: Number,
    required: true,
    default () {
      return this.created_unixtime
    },
  },
})

categorySchema.methods.parentCategoryIdIsMyself = function (parentCategoryId) {
  return this.id === parentCategoryId
}

const Category = mongoose.model('Category', categorySchema)

export default Category
