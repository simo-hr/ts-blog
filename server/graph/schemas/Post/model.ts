import mongoose from 'mongoose'

const MSchema = mongoose.Schema

const postSchema = new MSchema({
  id: { type: String, required: true, unique: true, },
  title: { type: String, required: true, unique: true, },
  content: { type: String, required: true, },
  is_published: { type: Boolean, default: false, },
  category: { type: Object, ref: 'Category', },
  published_at: { type: Date, default: Date.now, },
  created_at: { type: Number, required: true, default: Date.now, },
  created_unixtime: { type: Number, required: true, default: new Date(), },
  updated_at: { type: Number, required: true, default: Date.now, },
  updated_unixtime: { type: Number, required: true, default: new Date(), },
})

const Post = mongoose.model('Post', postSchema)

export default Post
