import mongoose from 'mongoose'

const MSchema = mongoose.Schema

const adminSchema = new MSchema({
  id: String,
  email: String,
  password: String,
})

const Admin = mongoose.model('Admin', adminSchema)

export default Admin
