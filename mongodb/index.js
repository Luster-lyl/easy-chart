
// eslint-disable-next-line no-unused-vars
const { MongoClient, ObjectID}  = require('mongodb');
const { dbUrl, dbName } = require('./config');

// 连接数据库
MongoClient.connect(dbUrl, (err, client) => {
    console.log("Connected successfully to server");
    // eslint-disable-next-line no-unused-vars
    const db = client.db(dbName);
    // db.close(); // 关闭连接
});
