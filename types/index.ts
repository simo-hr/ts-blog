export type Timestamp = {
  created_unixtime: number
  updated_unixtime: number
}

export type Admin = {
  id: string
  email: string
  password: string
  accessToken: string
}

export type PostData = {
  id: string
  title: string
  content: string
  is_published: boolean
  published_at: Date
}

export type Post = PostData & Timestamp

export type CategoryData = {
  id: string
  name: string
  parent_category_id?: string
}

export type Category = CategoryData & Timestamp
export type PostRelCategory = Post & {
  category: CategoryData
}
