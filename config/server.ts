const express = require('express');   //This line imports the Express module into our project directory.

const app = express();     //This line creates an instance of an Express application.

const port = 5000;

const {req, res} = require('express');

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export {app, req, res};