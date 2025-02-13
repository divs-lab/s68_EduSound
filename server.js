const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = 3000;

// MongoDB connection string (replace with your own credentials)
const url = "mongodb+srv://divyasingh5028:lucygreat@asap.6ch51.mongodb.net/?retryWrites=true&w=majority&appName=ASAP";

// Connect to MongoDB
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect()
  .then(() => {
    console.log("Connected to MongoDB Atlas!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });

// Define routes
app.get('/abc', (req, res) => {
    res.send("Hello World!")
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});
