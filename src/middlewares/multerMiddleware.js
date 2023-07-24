const { S3Client } = require('@aws-sdk/client-s3');
const multer = require('multer');
const multerS3 = require('multer-s3');
require('dotenv').config();

// S3 지역 및 인증 수단 변경
const s3 = new S3Client({
  region: 'ap-northeast-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const multerMiddleware = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'clonecodingimage',
    acl: 'public-read', // read만 읽기 가능하도록 변경
    contentType: multerS3.AUTO_CONTENT_TYPE, // 어떠한 데이터 타입도 가능
    key: function (req, file, cb) {
      cb(null, `images/${Date.now().toString()}`); // 파일위치와 파일명을 지정해주는 코드, 시간 순으로 저장을 함
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5메가로 용량 제한
});

module.exports = multerMiddleware;
