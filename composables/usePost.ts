import { Post, PostData, } from '../types/index'
import { RepositoryFactory, } from '@/api/gql/repositories'
import { SearchQuery, SearchQuerySort, } from '@/types/graphql'

type UsePost = () => {
  postById: (id: string) => Promise<{ post: PostData; error: unknown }>
  postSearch: ({ limit, sort, }?: SearchQuery<Post>) => Promise<{ posts: Post[]; error: unknown }>
  postAll: (sort?: SearchQuerySort<Post>) => Promise<{ posts: Post[]; error: unknown }>
  postCreateOne: (_post: Omit<PostData, 'id'>) => Promise<{ post: PostData; error: unknown }>
  postUpdateOne: (input: PostData) => Promise<{ post: PostData; error: unknown }>
  postDelete: (id: string) => Promise<{ error: unknown }>
}

export const usePost: UsePost = () => {
  const postById = async (id: string): Promise<{ post: PostData; error: unknown }> => {
    let post: Post
    let error: unknown
    const res = await RepositoryFactory.Post.getPost({ id, })
    if (res.error) {
      error = res.error
    } else {
      post = res.data.post
    }

    return { post, error, }
  }

  const postAll = async (sort: SearchQuerySort<Post>): Promise<{ posts: Post[]; error: unknown }> => {
    let posts: Post[] = []
    let error: unknown

    const resPosts = await RepositoryFactory.Post.searchPosts({ sort, })
    if (resPosts.error) {
      error = resPosts.error
    } else {
      posts = resPosts.data.searchPosts
    }

    return { posts, error, }
  }

  const postSearch = async ({ limit, sort, }: SearchQuery<Post>): Promise<{ posts: Post[]; error: unknown }> => {
    let posts: Post[] = []
    let error: unknown
    const resPosts = await RepositoryFactory.Post.searchPosts({
      limit: limit || 100,
      sort,
    })
    if (resPosts.error) {
      error = resPosts.error
    } else {
      posts = resPosts.data.searchPosts
    }

    return { posts, error, }
  }

  const postCreateOne = async (_post: Omit<PostData, 'id'>): Promise<{ post: PostData; error: unknown }> => {
    let post: PostData
    let error: unknown
    const resPost = await RepositoryFactory.Post.createPost({ post: _post, })
    if (resPost.error) {
      error = resPost.error
    } else {
      post = resPost.data.createPost
    }

    return { post, error, }
  }
  const postUpdateOne = async (input: PostData): Promise<{ post: PostData; error: unknown }> => {
    let post: PostData
    let error: unknown
    const res = await RepositoryFactory.Post.updatePost({ post: input, })
    if (res.error) {
      error = res.error
    } else {
      post = res.data.updatePost
    }

    return { post, error, }
  }

  const postDelete = async (id: string): Promise<{ error: unknown }> => {
    let error: unknown
    const res = await RepositoryFactory.Post.removePost({ id, })
    if (res.error) {
      error = res.error
    }
    return { error, }
  }

  return {
    postById,
    postSearch,
    postAll,
    postCreateOne,
    postUpdateOne,
    postDelete,
  }
}
