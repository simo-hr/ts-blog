const fetchArgText = (args) => {
  let argText = ''
  for (const key in args) {
    if (args[key]) {
      argText += `${key}: "${args[key]}"`
    }
  }
  return argText
}

const getStatement = (statement, args) => {
  const argText = fetchArgText(args)
  console.log('argText', argText)

  return statement(argText)
}

console.log(fetchArgText({ id: '2', }))
