import express from 'express'

const port = 3000

const app = express()

app.use(express.static('public'))

app.listen(port, (): void => {
  console.log(`Listening on port ${port}`)
})
