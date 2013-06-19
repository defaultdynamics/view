/**
 *
 */

var template = require('./template')
  , domify = require('domify')
  , uuid = require('uuid');


module.exports = View;

/**
 *
 */

function View (tpl, options) {
    
    options = options || {};

    this.el = domify(template);
    this.el.id = uuid();

    // set id
    if (options.id) this.el.id = options.id;

    this.el.appendChild(tpl);
}