const GET_CATEGORY = (args) => {
  return `
  {
    category(${args}) {
      id
      name
      parent_category_id
      created_at
      created_unixtime
      updated_at
      updated_unixtime
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
      created_at
      created_unixtime
      updated_at
      updated_unixtime
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
      created_at
      created_unixtime
      updated_at
      updated_unixtime
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
      created_at
      created_unixtime
      updated_at
      updated_unixtime
    },
  }
`
}
const REMOVE_CATEGORY = (args) => {
  return `
  mutation {
    removeCategory (${args}) {
      id
      name
      parent_category_id
      created_at
      created_unixtime
      updated_at
      updated_unixtime
    },
  }
`
}
export { GET_CATEGORY, GET_CATEGORIES, CREATE_CATEGORY, UPDATE_CATEGORY, REMOVE_CATEGORY, }
