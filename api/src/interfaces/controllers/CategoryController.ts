import { ListCategory } from '../../application/services/ListCategory'
import { CreateCategory } from '../../application/services/CreateCategory'
import CategoryRepository from '../../interfaces/databases/CategoryRepository'

const listCategory = new ListCategory()
const createCategory = new CreateCategory(new CategoryRepository())

export class CategoryController {
  async listCategories() {
    return await listCategory.execute()
  }
  async createCategories(category: { name: string }) {
    return await createCategory.execute(category)
  }
}
