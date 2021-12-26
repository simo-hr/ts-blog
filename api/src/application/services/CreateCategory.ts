import { ICategoryRepository } from '../repositories/ICategoryRepository'

export class CreateCategory {
  private categoryRepository: ICategoryRepository

  constructor(categoryRepository: ICategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  execute(category: { name: string }) {
    return this.categoryRepository.create(category)
  }
}
