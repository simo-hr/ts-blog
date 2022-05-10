import { signAccessToken, verifyAccessToken, } from '../../../common/auth/jwt-auth'
import AdminModel from './model'

const PostResolver = {
  Mutation: {
    signUp (_, { email, password, }) {
      const admin = new AdminModel()
      admin.signUp({ email, password, })
      admin.id = admin._id.toString()
      return admin.save()
    },
    async signIn (_, { email, password, }) {
      // "[GraphQL] secretOrPrivateKey must have a value"
      const admin = await AdminModel.findOne({ email, })
      if (!admin) {
        throw new Error('Error: email is invalid')
      }
      if (!admin.compare(password, admin.password)) {
        throw new Error('Error: email or password is invalid')
      }
      const accessToken = signAccessToken(admin.id)
      admin.access_token = accessToken
      return admin.save()
    },
    async checkAccessToken (_, { accessToken, }) {
      const admin = await AdminModel.findOne({ accessToken, })
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
