## View
Page wrapper for handling page transitions.

## Usage
Creating a view

    // Home section
    var View = require('view')
      , template = require('./template')
      , domify = require('domify');


    /**
     *
     */

    Home = function () {
        this.view = new View(domify(template));
    }

    module.exports = Home;