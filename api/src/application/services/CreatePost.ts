import { IPostRepository } from '../repositories/IPostRepository'
import { Prisma } from '@prisma/client'

export class CreatePost {
  private postRepository: IPostRepository

  constructor(postRepository: IPostRepository) {
    this.postRepository = postRepository
  }

  execute(post: Prisma.PostCreateInput) {
    return this.postRepository.create(post)
  }
}
