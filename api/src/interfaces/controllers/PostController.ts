import { CreatePost } from '../../application/services/CreatePost'
import { PostRepository } from '../../interfaces/databases/PostRepository'
import { Prisma } from '@prisma/client'

export class PostController {
  private postRepository
  constructor() {
    this.postRepository = new PostRepository()
  }

  async create(post: Prisma.PostCreateInput) {
    const useCase = new CreatePost(this.postRepository)
    return await useCase.execute(post)
  }
}
