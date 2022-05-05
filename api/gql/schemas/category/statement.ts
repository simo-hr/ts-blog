const commonStatement = /* GraphQL */ `
id
name
parent_category_id
posts
`
const GET_CATEGORY = (args) => {
  return /* GraphQL */ `
  {
    category(${args}) {
      ${commonStatement}
      parent_category_id
    },
  }
`
}

const SEARCH_CATEGORIES = () => {
  return /* GraphQL */ `
  query ($limit: Int, $sort: CategorySort) {
    searchCategories(limit: $limit, sort: $sort) {
    ${commonStatement}
    parent_category {
      id
      name
      parent_category_id
    }
    created_unixtime
    updated_unixtime
  }
}
`
}

const CREATE_CATEGORY = () => {
  return /* GraphQL */ `
  mutation ($category: CreateCategory) {
    createCategory(category: $category) {
      ${commonStatement}
      parent_category_id
    }
  }

`
}
const UPDATE_CATEGORY = () => {
  return /* GraphQL */ `
  mutation ($category: UpdateCategory) {
    updateCategory(category: $category) {
      ${commonStatement}
      parent_category_id
    }
  }

`
}
const REMOVE_CATEGORY = (args) => {
  return /* GraphQL */ `
  mutation {
    removeCategory (${args}) {
      ${commonStatement}
      parent_category_id
    },
  }
`
}
export { GET_CATEGORY, SEARCH_CATEGORIES, CREATE_CATEGORY, UPDATE_CATEGORY, REMOVE_CATEGORY, }
