/* jshint node: true */
'use strict';

var textModule = require('broccoli-export-text');

module.exports = {
    name: 'ember-cli-text-module',

    treeForApp: function() {
        return textModule(this.app.trees.app, {
            extensions: ['txt', 'css']
        });
    },

    treeForTestSupport: function() {
        return textModule(this.app.trees.tests, {
            extensions: ['txt', 'css']
        });
    }
};
