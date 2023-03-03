require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
//parse application/JSON 
app.use(bodyParser.json())
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/add', (req, res) => {
  const item = req.body;
  res.json(item)

})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})