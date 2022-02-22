export type Admin = {
  id: string
  email: string
  password: string
  accessToken: string
}

export type Post = {
  id: string
  title: string
  content: string
  isPublished: boolean
  publishedAt: Date
  updatedAt: Date
}

export type Category = {
  id: string
  name: string
  parentCategoryId?: string
  updatedAt: Date
}
