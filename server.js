const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
console.log("PORT: ", PORT);

const server = app.listen(
   PORT,
   console.log(`Server (modified) running on port ${PORT}`)
);
