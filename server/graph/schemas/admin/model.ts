import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { Id, TimeStamp, idDefinition, timeStampDefinition, } from '../common/plugins'

export interface Admin extends Id, TimeStamp {
  email: string
  password: string
  access_token: string
}

const adminSchemaFields: Required<mongoose.SchemaDefinition<Admin>> = {
  ...idDefinition,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  access_token: {
    type: String,
  },
  ...timeStampDefinition,
}

class AdminWithMethods implements Admin {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    public id: string,
    public email: string,
    public password: string,
    // eslint-disable-next-line camelcase
    public access_token: string,
    // eslint-disable-next-line camelcase
    public created_unixtime: number,
    // eslint-disable-next-line camelcase
    public updated_unixtime: number
  ) {}

  signUp ({ email, password, }: { email: string; password: string }) {
    if (email) {
      this.email = email
    }
    if (!password) {
      throw new Error('Failed: No password')
    }
    this.setHash(password)
  }

  setHash (password: string) {
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(8), 10)
  }

  compare (password: string, hashedPassword: string) {
    return bcrypt.compareSync(password, hashedPassword)
  }
}

export type IAdmin = Document & AdminWithMethods

export const adminSchema = new mongoose.Schema<IAdmin>(adminSchemaFields, {
  versionKey: false,
})

adminSchema.methods.signUp = AdminWithMethods.prototype.signUp
adminSchema.methods.setHash = AdminWithMethods.prototype.setHash
adminSchema.methods.compare = AdminWithMethods.prototype.compare

const AdminModel = mongoose.model<IAdmin>('Admin', adminSchema, 'admins')
export default AdminModel
