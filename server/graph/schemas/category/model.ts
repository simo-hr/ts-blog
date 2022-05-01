import mongoose from 'mongoose'

import { Id, TimeStamp, idDefinition, timeStampDefinition, } from '../common/plugins'

export interface Category extends Id, TimeStamp {
  name: string
  parent_category_id: string
  posts: string[]
}

const categorySchemaFields: Required<mongoose.SchemaDefinitionProperty<Category>> = {
  ...idDefinition,
  name: {
    type: String,
    required: true,
    unique: true,
  },
  parent_category_id: {
    type: String,
  },
  posts: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Post',
    }
  ],
  ...timeStampDefinition,
}

class CategoryWithMethods implements Category {
  constructor (
    public id: string,
    public name: string,
    public parent_category_id: string,
    public posts: string[],
    public created_unixtime: number,
    public updated_unixtime: number
  ) {}

  parentCategoryIdIsMyself (parentCategoryId: string): boolean {
    return this.id === parentCategoryId
  }
}

export type ICategory = Document & CategoryWithMethods

export const categorySchema = new mongoose.Schema<ICategory>(categorySchemaFields, {
  versionKey: false,
})

categorySchema.methods.parentCategoryIdIsMyself = CategoryWithMethods.prototype.parentCategoryIdIsMyself

const CategoryModel: mongoose.Model<ICategory> =
  mongoose.models.Category || mongoose.model('Category', categorySchema, 'categories')
export default CategoryModel
