export const fetchArgText = (args) => {
  let argText = ''
  for (const key in args) {
    if (args[key]) {
      if (typeof args[key] === 'string') {
        argText += `${key}: "${args[key]}"`
      } else {
        argText += `${key}: ${args[key]}`
      }
    }
  }
  return argText
}

export const getStatement = (statement, args) => {
  const argText = fetchArgText(args)
  return statement(argText)
}
