import mongoose from 'mongoose'

const MSchema = mongoose.Schema

const postSchema = new MSchema({
  id: { type: String, required: true, unique: true, },
  title: String,
  content: String,
  isPublished: Boolean,
  publishedAt: { type: Date, default: Date.now, },
  updatedAt: { type: Date, default: Date.now, },
})

const Post = mongoose.model('Post', postSchema)

export default Post
