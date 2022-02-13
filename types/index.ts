export type Admin = {
  id: string
  email: string
  password: string
}
export type Post = {
  id: string
  title: string
  content: string
  isPublished: boolean
  publishedAt: Date
  updatedAt: Date
}
