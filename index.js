require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', routes);

try {
   mongoose.connect(process.env.MONGO_URI);
   console.log('Successfully Connected to MongoDB');
} catch (e) {
   console.log(`Mongo Connnection failed: ${e.message}`);
   process.exit(1);
}

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
