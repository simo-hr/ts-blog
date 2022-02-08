import Admin from './model'

const PostResolver = {
  Mutation: {
    async signIn (_, { email, password, }) {
      const admin = await Admin.findOne({ email, })
      if (!admin) {
        throw new Error('Error: not found email')
      }
      if (admin.password !== password) {
        throw new Error('Error: email or password is invalid')
      }
      return admin
    },
    async signOut (_, { id, }) {
      const admin = await Admin.findById(id)
      if (!admin) {
        throw new Error('Error: not found id')
      }
      return admin
    },
  },
}

export default PostResolver
