import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const MSchema = mongoose.Schema

const adminSchema = new MSchema({
  id: String,
  email: String,
  password: String,
  accessToken: String,
})

adminSchema.methods.signUp = function ({ email, password, }) {
  if (email) {
    this.email = email
  }
  if (!password) {
    throw new Error('Failed: No password')
  }
  this.setHash(password)
}

adminSchema.methods.setHash = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(8), 10)
}

adminSchema.methods.compare = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword)
}

const Admin = mongoose.model('Admin', adminSchema)

export default Admin
