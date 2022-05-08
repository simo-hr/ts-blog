import mongoose from 'mongoose'

export interface Id {
  id: string
}

export const idDefinition: Required<mongoose.SchemaDefinition<Id>> = {
  id: {
    type: String,
    required: true,
    unique: true,
    default () {
      return this._id
    },
  },
}

export interface TimeStamp {
  created_unixtime: number
  updated_unixtime: number
}

export const timeStampDefinition: Required<mongoose.SchemaDefinition<TimeStamp>> = {
  created_unixtime: {
    type: Number,
    default: new Date().getTime(),
  },
  updated_unixtime: {
    type: Number,
    default: new Date().getTime(),
  },
}
