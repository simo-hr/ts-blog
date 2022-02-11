// RepositoryFactory
import AdminRepository from '../schemas/admin/repository'
import PostRepository from '../schemas/post/repository'

export const RepositoryFactory = {
  Admin: AdminRepository,
  Post: PostRepository,
}
