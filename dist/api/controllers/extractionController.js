'use strict';

var modelData = require('../models/extractionModel');
// get request method
exports.getAssetModel = function (req, res) {
    res.json(modelData.s95Json);
};

// post request method
exports.addProcessModelData = function (req, res) {
    // the request body has two values , fileUrl and processModelId. Both are not used yet, but can be by the below line:
    // var fileUrl = req.body.fileUrl;  var processModelId = req.body.processModelId;
    console.log("File url: " + req.body.fileUrl + ", process id: " + req.body.processModelId);
    console.log(req.body);

    // UUID generation in JS unknown, passing a static number for now
    var uuid = 982782982792792;
    res.json({"uuid": uuid});
};

exports.eventhub_post =  function (req, response) {
    console.log(req.body);
    modelData.eventhub_data = req.body;
    response.send(modelData.eventhub_data);
};

exports.eventhub_get = function (req, res) {
    res.json(modelData.eventhub_data);
};