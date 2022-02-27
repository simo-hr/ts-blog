import Category from '../category/model'
import Post from './model'

const PostResolver = {
  Query: {
    post (_, { id, }) {
      const post = Post.findOne({ id, })
      return post
    },
    posts () {
      const posts = Post.find()
      return posts
    },
  },
  Mutation: {
    async createPost (_, args) {
      const post = new Post(args)
      post.id = post._id.toString()
      const category = await Category.findOne({ id: args.category_id, })
      post.category = category
      return post.save()
    },
    updatePost (_, args) {
      const updatedPost = Post.findByIdAndUpdate(
        args.id,
        {
          $set: {
            title: args.title,
          },
        },
        { new: true, }
      )
      return updatedPost
    },
    async removeCategory (_, args) {
      await Post.findByIdAndRemove(args.id)
    },
  },
}

export default PostResolver
