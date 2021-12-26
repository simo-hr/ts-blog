import { Post } from '../../domain/models/Post'
import { Prisma } from '@prisma/client'

export abstract class IPostRepository {
  abstract create(post: Prisma.PostCreateInput): Promise<Post>
}
