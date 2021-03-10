import mongoose from 'mongoose'

class MongooConnect {
    public connect(): void {
        mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
    }
}

export { MongooConnect }


