import mongoose from 'mongoose'

import { Id, TimeStamp, idDefinition, timeStampDefinition, } from '../common/plugins'

export interface Post extends Id, TimeStamp {
  title: string
  content: string
  category_id: mongoose.Types.ObjectId
  published_unixtime: number
}

const postSchemaFields: Required<mongoose.SchemaDefinition<Post>> = {
  ...idDefinition,
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  published_unixtime: {
    type: Number,
  },
  ...timeStampDefinition,
}

export type IPost = Document

export const postSchema = new mongoose.Schema<IPost>(postSchemaFields, {
  versionKey: false,
})

const PostModel = mongoose.model<IPost>('Post', postSchema, 'posts')
export default PostModel
