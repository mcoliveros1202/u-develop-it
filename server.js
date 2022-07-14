// import express
const express = require('express');

// port designation
const PORT = process.env.PORT || 3001;
// app expression
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());ç

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });