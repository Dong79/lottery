
// 替换为你的 MongoDB Atlas 连接字符串
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully!');
    mongoose.connection.close(); // 测试连接后关闭
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
