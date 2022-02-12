import { signAccessToken, verifyAccessToken, } from '../../../common/auth/jwt-auth'
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
      if (!admin.compare(password, admin.password)) {
        throw new Error('Error: email or password is invalid')
      }
      const accessToken = signAccessToken(admin.id)
      admin.accessToken = accessToken
      return admin.save()
    },
    async checkAccessToken (_, { accessToken, }) {
      const admin = await Admin.findOne({ accessToken, })
      if (!admin) {
        throw new Error('Error: accessToken is invalid')
      }
      const resVerifyAccessToken = await verifyAccessToken(accessToken)
      if (resVerifyAccessToken.error) {
        throw new Error('Error: accessToken is invalid')
      }
      console.log('success: accessToken check')
      return admin
    },
  },
}

export default PostResolver
