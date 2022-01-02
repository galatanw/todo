let MongoClient = require('mongodb').MongoClient;
const { v4: uuidv4 } = require('uuid');
let url = 'mongodb://localhost:27017/';

class TodoDao {
 constructor() {}
 getAll() {
  return 'get all';
 }
 getById(id,res) {
  MongoClient.connect(url, function (err, db) {
   if (err) throw err;
   var dbo = db.db('todo-app');
   dbo.collection('todo').findOne({ _id: id }, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
    db.close();
   });
  });
 }
 delete(id) {}
 create(todo) {
  MongoClient.connect(url, function (err, db) {
   if (err) throw err;
   var dbo = db.db('todo-app');
   const uuid = uuidv4();
   dbo
    .collection('todo')
    .insertOne({ ...todo, _id: uuid }, function (err, res) {
     if (err) throw err;
     db.close();
     return { ...todo, _id: uuid };
    });
  });
 }
 update(id) {}
}

// MongoClient.connect(url, function (err, db) {
//  if (err) throw err;
//  console.log('Database created!');
//  db.close();
// });

module.exports = { TodoDao };
