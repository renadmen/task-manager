// This file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


const uri = "mongodb+srv://renadUser:747400@cluster0.dqjni.mongodb.net/renadDB?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected…');
})
.catch(err => console.log(err))
mongoose.set('useCreateIndex', true);



module.exports = {
    mongoose
};
