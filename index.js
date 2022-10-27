const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000
const path = require ('path')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/image', (req, res) => {
  let imagepath = path.join (__dirname,'car.png');
  res.sendFile (imagepath)
})

app.get('/dynamicimage',(req, res) => {
  let image1 = path.join (__dirname,'car.png');
  let image2 = path.join (__dirname,'pic.png');
  console.log(req.query)
  if (req.query.name=='image1'){
    res.sendFile(image1)
  }
  else if ( req.query.name=='image2'){
    res.sendFile(image2)
  }
  else {
    res.send('error')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})