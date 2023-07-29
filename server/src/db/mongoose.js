const mongoose = require('mongoose'); 

const uri = process.env.MONGOURI

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB Atlas!');
})
.catch((err) => {
  console.error('Error connecting to MongoDB Atlas:', err);
});
