// eslint-disable-next-line import/default
import jwt from 'jsonwebtoken'

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
// const deviceTokenSecret = process.env.DEVICE_TOKEN_SECRET
// const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET
const expiresIn = '1h'

type SignPayload = {
  userId: string
}

type ResponseVerifyString = {
  decoded?: string
  error?: {
    message: string
  }
}

const signAccessToken = (id: string) => {
  const payload: SignPayload = {
    userId: id,
  }
  // eslint-disable-next-line import/no-named-as-default-member
  return jwt.sign(payload, accessTokenSecret, {
    expiresIn,
  })
}

const verifyAccessToken = (_accessToken: string): Promise<ResponseVerifyString> => {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line import/no-named-as-default-member
    jwt.verify(_accessToken, accessTokenSecret, (error, decoded) => {
      if (error) {
        return resolve({
          error: {
            message: error.message || 'Error: something went wrong',
          },
        })
      }
      if (decoded) {
        return resolve({
          decoded: decoded as unknown as string,
        })
      }
      return reject(new Error('Error: something went wrong'))
    })
  })
}

export { signAccessToken, verifyAccessToken, }
