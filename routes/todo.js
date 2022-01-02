var express = require('express');
var router = express.Router();
const { TodoDao } = require('../dao/todo');
const todoDao = new TodoDao();


/* GET users listing. */
router.get('/', function (req, res, next) {
 res.send(todoDao.getAll());
});
router.get('/:id', function (req, res, next) {
 todoDao.getById(req.params.id,res);
});
router.post('/', function (req, res, next) {
 res.send(todoDao.create(req.body));
});
router.delete('/:id', function (req, res, next) {
 res.send('delete todo');
});
router.patch('/:id', function (req, res, next) {
 res.send('patch todo');
});

module.exports = router;
