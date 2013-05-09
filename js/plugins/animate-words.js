/*
 * animate-words.js - v1.0.0 - 2013-04-27
 * Marcel Miranda < reaktivo.com >
 * Copyright (c) 2013; Licensed MIT

  animateWords is a jQuery plugin will split
  the matching element's text into units where
  each one will be applied some style or class
  by passing the `action` on the options hash.

  Usage:

  // when dom ready
  jQuery(document).ready(function($) {

    // default behaviour is adding the class
    // `.end` to each word separated by a 1000ms span
    $('body h1').animateWords()

  })

*/

;(function($, window, document, undefined) {


  $.fn.animateWords = function(options) {

    options = $.extend({
      delay: 1000,
      action: function(el) {
        el.addClass('end')
      },
      splitter: " ",
      selector: '.unit',
      done: function() { }
    }, options)

    var words = this.text().split(options.splitter),
      className = options.selector.substr(1),
      html = $.map(words, function(word) {
        return "<span class=" + className + ">" + word + "</span>"
      })

    this.html(html.join(options.splitter))

    var units = $(options.selector, this)
    units.each(function(i) {

      var $this = $(this)

      setTimeout(function() {
        options.action($this)
        if (i === units.length - 1) {
          options.done()
        }
      }, options.delay * (i + 1))

    })

    return this
  }

})(jQuery, window, document);