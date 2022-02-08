const express = require('express')
const fetch = require('node-fetch')
const Request = require('requests')
const app = express()
const port = 3000

app.use(express.static(__dirname));
var url = 'https://newsapi.org/v2/everything?q=indian stock market&from=2022-02-06&sortBy=popularity&apiKey=5afeb373f35548f2adc9e98f355ed282';
var articles;
fetch(url).then(function(response){
  var maal = response.json()
  maal.then((m)=>{
    articles =  m.articles;
  })
})
app.get('/', (req, res) => {
  res.sendFile('index.html');
})

app.get('/news', (req, res) => {
  res.send(articles)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})