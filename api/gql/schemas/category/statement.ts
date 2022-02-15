const GET_CATEGORY = (args) => {
  return `
  {
    category(${args}) {
      id
      name
      parentCategoryId
      updatedAt
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
      parentCategoryId
      updatedAt
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
      parentCategoryId
      updatedAt
    },
  }
`
}
export { GET_CATEGORY, GET_CATEGORIES, CREATE_CATEGORY, }
