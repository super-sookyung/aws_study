const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/posttest', (req, res) => {
  res.send({
    message: `Hello CEOS ${req.body.name} !
    Nice to meet you this is aws study example source code.`
  })
})

app.listen(8081)
