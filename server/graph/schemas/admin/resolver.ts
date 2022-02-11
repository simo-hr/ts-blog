import bcrypt from 'bcryptjs'
import Admin from './model'

const PostResolver = {
  Mutation: {
    async signUp (_, { email, password, }) {
      const admin = new Admin()
      await admin.signUp({ email, password, })
      admin.id = admin._id.toString()
      return admin.save()
    },
    async signIn (_, { email, password, }) {
      const admin = await Admin.findOne({ email, })
      if (!admin) {
        throw new Error('Error: email is invalid')
      }
      if (!compare(password, admin.password)) {
        throw new Error('Error: email or password is invalid')
      }
      return admin
    },
  },
}
const compare = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword)
}

export default PostResolver
