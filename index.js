/**
 *
 */

var template = require('./template')
  , domify = require('domify');


module.exports = View;

/**
 *
 */

function View (tpl, options) {
    
    options = options || {};

    this.el = domify(template);

    // set id
    if (options.id) this.el.id = options.id;

    this.el.appendChild(tpl);
}