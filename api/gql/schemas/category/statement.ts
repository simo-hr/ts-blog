const commonStatement = `
id
name
parent_category_id
posts
created_unixtime
updated_unixtime
`
const GET_CATEGORY = (args) => {
  return `
  {
    category(${args}) {
      ${commonStatement}
    },
  }
`
}

const GET_CATEGORIES = () => {
  return `
  {
    categories {
      id
      name
      parent_category_id
      created_unixtime
      updated_unixtime
    },
  }
`
}

const CREATE_CATEGORY = () => {
  return `
  mutation ($category: CreateCategory) {
    createCategory(category: $category) {
      ${commonStatement}
    }
  }

`
}
const UPDATE_CATEGORY = () => {
  return `
  mutation ($category: UpdateCategory) {
    updateCategory(category: $category) {
      ${commonStatement}
    }
  }

`
}
const REMOVE_CATEGORY = (args) => {
  return `
  mutation {
    removeCategory (${args}) {
      ${commonStatement}
    },
  }
`
}
export { GET_CATEGORY, GET_CATEGORIES, CREATE_CATEGORY, UPDATE_CATEGORY, REMOVE_CATEGORY, }
