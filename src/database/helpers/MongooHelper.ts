import mongoose from 'mongoose'

class MongooHelper {
  public connect (): void {
    mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }).catch(() => {
      console.table([{ database: 'mongodb', connect: false }])
    })
  }
}

export { MongooHelper }
