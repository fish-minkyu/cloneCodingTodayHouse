const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const routes = require('./src/routes/index.route');

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', routes);

//에러 핸들러
app.use((err, req, res, next) => {
  const errorMessage = err.stack;
  console.error('errorMessage:', errorMessage);
  return res.status(err.status).json({
    errorMessage: err.message,
  });
});

app.listen(process.env.PORT || 3000, (req, res) => {
  console.log(`${process.env.PORT || 3000} 포트에 접속 되었습니다.`);
});
