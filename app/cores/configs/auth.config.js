export default {
  secretOrKey: process.env.SHARED_KEY,
  issuer: 'self',
  audience: 'sendit.asia',
  accessTokenExpiresIn: 365 * 24 * 60 * 60 * 1000, // 15 min
  refreshAccessTokenExpiresIn: 365 * 24 * 60 * 60 * 1000 // 1 year
}
