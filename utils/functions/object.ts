export const getValue = (key: string, object: object) => {
  const value = key.split('.').reduce(function (p, prop) {
    return p[prop]
  }, object)
  return value
}

export const createObject = (keys: string[], value: unknown) => {
  if (!keys.length) {
    return value
  }
  const currentKey = keys.shift()
  return {
    [currentKey]: createObject(keys, value),
  }
}
