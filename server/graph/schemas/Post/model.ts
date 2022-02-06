import mongoose from 'mongoose'

const MSchema = mongoose.Schema

const postSchema = new MSchema({
  title: String,
  content: String,
  published_at: Date,
  updated_at: { type: Date, default: Date.now, },
  is_published: Boolean,
})

postSchema.methods.findById = function (id) {
  return this.find({ id, })
}

const Post = mongoose.model('Post', postSchema)

export default Post
