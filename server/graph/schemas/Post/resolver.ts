import mongoose from 'mongoose'
import { PostData, Category, } from '../../../../types'
import PostModel from './model'
import { SearchQuery, } from '@/types/graphql'

const PostResolver = {
  Query: {
    post (_, args: { id: string }) {
      const post = PostModel.findOne({ id: args.id, })
      return post
    },
    async searchPosts (_, { limit, sort, }: SearchQuery<Category>) {
      const pipeLines: mongoose.PipelineStage[] = [
        {
          $lookup: {
            from: 'categories',
            localField: 'category_id',
            foreignField: '_id',
            as: 'category',
          },
        },
        {
          $unwind: {
            path: '$category',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $match: {},
        },
        { $sort: sort || { created_unixtime: -1, }, }
      ]

      if (limit) {
        pipeLines.push({ $limit: limit, })
      }

      const posts = await PostModel.aggregate(pipeLines).allowDiskUse(true).exec()
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
