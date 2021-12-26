import { IPostRepository } from '../../application/repositories/IPostRepository'
import { Prisma, PrismaClient } from '@prisma/client'
import { Post } from '../../domain/models/Post'
const prisma = new PrismaClient()

export class PostRepository extends IPostRepository {
  create = async (post: Prisma.PostCreateInput): Promise<Post> => {
    return await prisma.post.create({ data: post })
  }
}
