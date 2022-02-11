const bcrypt = require('bcryptjs')

const result = bcrypt.hash('password', 10)

;(async () => {
  console.log(await result)
})()
