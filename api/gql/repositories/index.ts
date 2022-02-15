// RepositoryFactory
import AdminRepository from '../schemas/admin/repository'
import PostRepository from '../schemas/post/repository'
import CategoryRepository from '../schemas/category/repository'

export const RepositoryFactory = {
  Admin: AdminRepository,
  Post: PostRepository,
  Category: CategoryRepository,
}
