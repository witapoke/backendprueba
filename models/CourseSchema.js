import { Schema, model } from 'mongoose'

const courseSchema = new Schema({
  title: String,
  price: Number,
  description: String,
  thumbnail: String,
  videos: [
    {
      videoTitle: String,
      videoUrl: String,
      videoDuration: String,
      videoThumbnail: String,
    },
  ],
})

const Course = model('Course', courseSchema)

export default Course
