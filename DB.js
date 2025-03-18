import mongoose from 'mongoose'
const connection = process.env.MONGO_DB_URL
const PORT = process.env.PORT
import app from './index.js'

export default async function connectDB() {
  await mongoose.connect(connection).then(() => {
    app.listen(PORT, () => {
      console.log('App listening to port 5000')
    })
  })
}
