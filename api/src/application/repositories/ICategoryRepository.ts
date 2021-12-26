import { Category } from '../../domain/models/Category'

export abstract class ICategoryRepository {
  abstract list(): Promise<Category[]>
  abstract create(category: { name: string }): Promise<Category>
}
