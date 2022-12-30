import mongoose from 'mongoose';
mongoose.set("strictQuery", true);
async function connectToDb() {
   try {
    const connection = await mongoose.connect(process.env.mongo_db_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(connection.connection.host);
   } catch (error) {
     console.log('aldaa garlaa',error.message)
   }
}
export default connectToDb;