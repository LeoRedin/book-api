require('dotenv/config')

console.log('host', process.env.DB_HOST)
console.log('user', process.env.DB_USER)
console.log('pass', process.env.DB_PASS)
console.log('db', process.env.DB_NAME)

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
