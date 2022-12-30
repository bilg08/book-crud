import mongoose from 'mongoose';
mongoose.set("strictQuery", true);
async function connectToDb() {
   try {
    const connection = await mongoose.connect(
      "mongodb+srv://bilguun:Tomyo_1234@cluster0.mvlbglv.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(connection.connection.host);
   } catch (error) {
     console.log('aldaa garlaa',error.message)
   }
}
export default connectToDb;