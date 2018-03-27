'use strict';


var mongoose = require('mongoose'),
  //Task = mongoose.model('Tasks');
Task = mongoose.model('Acc');

exports.list_all_acc = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_acc = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_acc = function(req, res) {
  Task.findById(req.params.accid, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_acc1 = function(req, res) {
  Task.find({account : req.params.accid }, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};



exports.update_a_acc = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.accid}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_acc = function(req, res) {


  Task.remove({
    _id: req.params.accid
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
