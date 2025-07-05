const express = require('express')
const app = express()
const port = 3005

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/Auth'))
app.use('/api', require('./routes/Staff'))

app.get('/', (req, res) => {
    return res.send(`Alive!!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
