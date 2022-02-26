export type Timestamp = {
  created_at: number
  created_unixtime: number
  updated_at: number
  updated_unixtime: number
}

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

export type CategoryData = {
  id: string
  name: string
  parent_category_id?: string
  updated_at: Date
}

export type Category = CategoryData & Timestamp
