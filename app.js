const express = require('express')
const app = express()

const routes = require('./routes')

app.use(express.json());
app.use('/api', routes);

app.listen(process.env.PORT || 3000, (req, res) => {
    console.log(`${process.env.PORT || 3000} 포트에 접속 되었습니다.`);
  });