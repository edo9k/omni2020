const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.json({
    event: 'Corona Quarantine Isolation',
    year: 2020,
    question: 'Am I finally getting good enough with react?',
    createdAt: new Date()
  })
})


app.listen(8666)
