cont express = require("express")

const server = express();

server.use(express.json())


server.get("/", (req, res) => {
  res.status(200).json({
    api: "up",
    environment: process.env.NODE_ENV,
  })
})

module.exports = server