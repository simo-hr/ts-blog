export const getValue = (key: string, object: Object) => {
  const value = key.split('.').reduce(function (p, prop) {
    return p[prop]
  }, object)
  return value
}

export const createObject = (keys: Array<string>, value: any) => {
  if (!keys.length) {
    return value
  }
  const currentKey = keys.shift()
  return {
    [currentKey]: createObject(keys, value),
  }
}
