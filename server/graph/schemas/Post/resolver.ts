import { PostData, } from '../../../../types'
import PostModel from './model'

const PostResolver = {
  Query: {
    post (_, args: { id: string }) {
      const post = PostModel.findOne({ id: args.id, })
      return post
    },
    posts () {
      const posts = PostModel.find()
      // Category.populate(posts, { path: 'category', })
      return posts
    },
  },
  Mutation: {
    createPost (_, args: { post: Omit<PostData, 'id'> }) {
      const post = new PostModel(args.post)
      return post.save()
    },
    updatePost (_, args: { post: PostData }) {
      const updatedPost = PostModel.findByIdAndUpdate(
        args.post.id,
        {
          $set: args.post,
        },
        { new: true, }
      )
      return updatedPost
    },
    async removePost (_, args: { id: string }) {
      return await PostModel.findByIdAndRemove(args.id)
    },
  },
}

export default PostResolver
