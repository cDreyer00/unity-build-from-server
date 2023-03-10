// dependencies
require("dotenv").config();
const express = require("express");

// import routes
const build = require("./src/routes/build");
const clone = require("./src/routes/clone");
const test = require("./src/routes/test");

const app = express();
app.use(express.json());

// routes
app.get('/', async (req, res) => {
    res.send("server running")
})
app.post("/build", build)
app.post("/clone", clone)
// app.post("/test", test)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))