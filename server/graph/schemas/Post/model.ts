import mongoose from 'mongoose'

const MSchema = mongoose.Schema

const postSchema = new MSchema({
  id: String,
  title: String,
  content: String,
  published_at: Date,
  updated_at: { type: Date, default: Date.now, },
  is_published: Boolean,
})

const Post = mongoose.model('Post', postSchema)

export default Post
