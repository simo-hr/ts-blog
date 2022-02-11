import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const MSchema = mongoose.Schema

const adminSchema = new MSchema({
  id: String,
  email: String,
  password: String,
})
adminSchema.methods.signUp = function ({ email, password, }) {
  if (email) { this.email = email }
  if (!password) { throw new Error('Failed: No password') }
  this.setHash(password)
}

adminSchema.methods.setHash = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(8), 10)
}

const Admin = mongoose.model('Admin', adminSchema)

export default Admin
