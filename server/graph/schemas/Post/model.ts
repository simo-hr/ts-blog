import mongoose from 'mongoose'

const MSchema = mongoose.Schema

const postSchema = new MSchema({
  id: {
    type: String,
    required: true,
    unique: true,
    default () {
      if (this._id) {
        return this._id.toStoring
      }
    },
  },
  title: { type: String, required: true, unique: true, },
  content: { type: String, required: true, },
  is_published: { type: Boolean, required: true, },
  category_id: { type: mongoose.Types.ObjectId, ref: 'Category', },
  published_unixtime: { type: Number, },
  created_unixtime: { type: Number, required: true, default: new Date().getTime(), },
  updated_unixtime: {
    type: Number,
    required: true,
    default () {
      return this.created_unixtime
    },
  },
})

const Post = mongoose.model('Post', postSchema)

export default Post
