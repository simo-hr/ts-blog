import { Category } from '../../domain/models/Category'
import CategoryRepository from '../../interfaces/databases/CategoryRepository'

const categoryRepository = new CategoryRepository()
export class ListCategory {
  execute() {
    return categoryRepository.list()
  }
}
