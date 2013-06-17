/**
 *
 */

var template = require('./template')
  , domify = require('domify');


module.exports = View;

/**
 *
 */

function View (tpl) {
	
	this.el = domify(template);

	this.el.appendChild(tpl);
}