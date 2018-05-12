'use strict';

// used for building a vendor stylesheet
import 'ng-sortable/dist/ng-sortable.css';

import angular from 'angular';
import markdownit from 'markdown-it';
global.markdownit = markdownit;

import app from './app/App.js';
import './app/Config.js';
import './app/Run.js';


import ListController from 'controller/ListController.js';
app.controller('ListController', ListController);


// require all the js files from subdirectories
var context = require.context('.', true, /(controller|service|filters|directive)\/(.*)\.js$/);

context.keys().forEach(function (key) {
	context(key);
});

