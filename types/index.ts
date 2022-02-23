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
  is_published: boolean
  published_at: Date
  updated_at: Date
}

export type Category = {
  id: string
  name: string
  parent_category_id?: string
  updated_at: Date
}
