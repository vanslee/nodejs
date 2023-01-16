const express = require('express')
const cors = require('cors')
const api = require('./routes/apiRouter')
const app = express()
app.use(cors())
app.use(express.urlencoded())
app.use('/api', api.apiRouter)
app.listen(3030, () => {
    console.log('server is running on localhost:3030');
})
