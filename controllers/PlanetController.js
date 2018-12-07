'use strict';


var mongoose = require('mongoose'),
planet = mongoose.model('Planets');


exports.listAllPlanets = function(req, res) {
  planet.find({}, function(err, obj) {
    if (err)
      res.send(err);
    res.json(obj);
  });
};



exports.searchPlanets = function(req, res) {
  planet.find(req.body, function(err, obj) {
    if (err)
      res.send(err);
    res.json(obj);
  });
};



exports.addPlanet = function(req, res) {
  var new_planet = new planet(req.body);
  new_planet.save(function(err, obj) {
    if (err)
      res.send(err);
    res.json(obj);
  });
};



exports.getPlanet = function(req, res) {
  planet.findById(req.params.planeta_id, function(err, obj) {
    if (err)
      res.send(err);
    res.json(obj);
  });
};



exports.updatePlanet = function(req, res) {
  planet.findOneAndUpdate({_id: req.params.planeta_id}, req.body, {new: true}, function(err, obj) {
    if (err)
      res.send(err);
    res.json(obj);
  });
};




exports.deletePlanet = function(req, res) {
  planet.remove({
    _id: req.params.planeta_id
  }, function(err, obj) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};