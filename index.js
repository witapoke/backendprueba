import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './DB.js'
import Course from './models/CourseSchema.js'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Esta es la vencida')
})

app.get('/courses', async (req, res) => {
  const courses = await Course.find({})
  res.status(200).json({ courses })
})

app.post('/courses', async (req, res) => {
  const { body } = req
  const { title, price, description } = body

  try {
    const newCourse = new Course({ title, price, description })
    await newCourse.save()
    res.status(200).json({ ok: true, data: newCourse })
  } catch (error) {
    res.status(500).json({ ok: false, message: error })
  }
})

connectDB()

export default app
