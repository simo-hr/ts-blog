const GET_CATEGORY = (args) => {
  return `
  {
    category(${args}) {
      id
      name
      parent_category_id
      updated_at
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
      updated_at
    },
  }
`
}

const CREATE_CATEGORY = (args) => {
  return `
  mutation {
    createCategory (${args}) {
      id
      name
      parent_category_id
      updated_at
    },
  }
`
}
const UPDATE_CATEGORY = (args) => {
  return `
  mutation {
    updateCategory (${args}) {
      id
      name
      parent_category_id
      updated_at
    },
  }
`
}
export { GET_CATEGORY, GET_CATEGORIES, CREATE_CATEGORY, UPDATE_CATEGORY, }
