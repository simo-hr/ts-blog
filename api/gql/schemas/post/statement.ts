const GET_POST = (args) => {
  return `
  {
    post(${args}) {
      id
      title
      content
      is_published
      published_at
      category {
        id
        name
        parent_category_id
        created_at
        created_unixtime
        updated_at
        updated_unixtime
      }
      created_at
      created_unixtime
      updated_at
      updated_unixtime
    },
  }
`
}

const GET_POSTS = () => {
  return `
  {
    posts {
      id
      title
      content
      is_published
      published_at
      category {
        id
        name
        parent_category_id
        created_at
        created_unixtime
        updated_at
        updated_unixtime
      }
      created_at
      created_unixtime
      updated_at
      updated_unixtime
    },
  }
`
}
const CREATE_POSTS = () => {
  return `
  mutation {
    createPost {
      id
      title
      content
      is_published
      published_at
      category {
        id
        name
        parent_category_id
        created_at
        created_unixtime
        updated_at
        updated_unixtime
      }
      created_at
      created_unixtime
      updated_at
      updated_unixtime
    },
  }
`
}
export { GET_POST, GET_POSTS, CREATE_POSTS, }
