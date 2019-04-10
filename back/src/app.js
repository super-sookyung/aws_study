const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/helloceos', (req, res) => {
  res.send({
    message: 'Hello CEOS Developers !'
  })
})

app.post('/posttest', (req, res) => {
  const nameValue = req.body.name
  const passwordValue = req.body.password
  console.log(nameValue)
  if (nameValue === '' || passwordValue === '') {
    res.status(404).send({
      error: `Hello CEOS Study Member !
      Didn't you miss some field?
      `
    })
  }
  if (passwordValue === '123456') {
    res.send({
      message: `password correct
      Hello CEOS ${req.body.name} !
      Nice to meet you this is aws study example source code.
      `
    })
  } else {
    res.status(400).send({
      error: `Dear ${req.body.name}.
      password wrong. please check your password again.
      `
    })
  }
})

app.listen(8081)
