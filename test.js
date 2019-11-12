var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors())
app.listen(3000, ()=> {
  console.log("at 3000")
})

testResp = [
  {avgMonth : 'Jan 2019', avgWeight: 65},
  {avgMonth : 'Feb 2019', avgWeight: 59},
  {avgMonth : 'Mar 2019', avgWeight: 99},
  {avgMonth : 'Jun 2019', avgWeight: 55},
  {avgMonth : 'Jul 2019', avgWeight: 72},
  {avgMonth : 'Apr 2019', avgWeight: 45},
  {avgMonth : 'May 2019', avgWeight: 36},
  {avgMonth : 'Aug 2019', avgWeight: 27},
  {avgMonth : 'Sep 2019', avgWeight: 18},
  {avgMonth : 'Oct 2019', avgWeight: 90},
  {avgMonth : 'Nov 2019', avgWeight: 09},
  {avgMonth : 'Dec 2019', avgWeight: 78},
]

app.get('/testAPI', (req, res) => {
  res.send(testResp)
})


//http://localhost:8082/GL/PatientGL; how to create multiple records for a single patient