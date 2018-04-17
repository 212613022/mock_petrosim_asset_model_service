'use strict';

module.exports = function (app) {
    var mockExtractionService = require('../controllers/extractionController');

    app.route('/model/:modelUuid')
        .get(mockExtractionService.getAssetModel);

    app.route('/model')
        .post(mockExtractionService.addProcessModelData);

    app.route('/eventhub')
        .get(mockExtractionService.eventhub_get);

    app.route('/eventhub')
        .post(mockExtractionService.eventhub_post);
};