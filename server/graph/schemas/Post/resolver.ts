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
      Category.populate(posts, { path: 'category', })
      return posts
    },
  },
  Mutation: {
    createPost (_, args) {
      const post = new Post(args)
      return post.save()
    },
    updatePost (_, args) {
      const updatedPost = Post.findByIdAndUpdate(
        args.id,
        {
          $set: args,
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
