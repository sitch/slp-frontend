define(function (require) {
	'use strict';

	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');
	var Marionette = require('marionette');
	var Template = require('templates');

	var Entity = Backbone.Marionette.ItemView.extend({
		tagName: 'div',
		className: 'entity',
		template: Template.Entity
	});
	return Entity;
});