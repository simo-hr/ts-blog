import mongoose from 'mongoose'

const MSchema = mongoose.Schema

const postSchema = new MSchema({
  id: { type: String, required: true, unique: true, },
  title: { type: String, required: true, unique: true, },
  content: { type: String, required: true, },
  is_published: { type: Boolean, default: false, },
  category: { type: Object, ref: 'Category', },
  published_unixtime: { type: Number, default: new Date(), },
  created_unixtime: { type: Number, required: true, default: new Date(), },
  updated_unixtime: { type: Number, required: true, default: new Date(), },
})

const Post = mongoose.model('Post', postSchema)

export default Post
