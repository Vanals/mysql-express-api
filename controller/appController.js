'use strict';

/*
list_all_tasks, create_a_task, read_a_task, update_a_task, delete_a_task.
We will export each of the functions for us to use in our routes.
Each of these functions uses different Task methods we created previously
in appModel.js such as getTaskById, getAllTask, updateById, createTask and remove.
*/

var Task = require('../models/appModels.js');

exports.list_all_tasks = function(req, res) {
  Task.getAllTask(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};

exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);

  //handles null error
   if(!new_task.task || !new_task.status){

            res.status(400).send({ error:true, message: 'Please provide task/status' });

        }
else{

  Task.createTask(new_task, function(err, task) {

    if (err)
      res.send(err);
    res.json(task);
  });
}
};


exports.read_a_task = function(req, res) {
  Task.getTaskById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.updateById(req.params.taskId, new Task(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove( req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
