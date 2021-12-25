import { Category } from '../../domain/models/Category'
import { list } from '../../interfaces/databases/CategoryRepository'

export class ListCategory {
  execute() {
    return list()
  }
}
