/*
 * appear-on-scroll.js - v1.0.0 - 2013-04-27
 * Marcel Miranda < reaktivo.com >
 * Copyright (c) 2013; Licensed MIT

  appearOnScroll is a jQuery plugin that listens
  to the window's scroll event and applies a css
  class to the matching elements when the scroll
  position goes over the element's window offset.

  Usage:

  // when dom ready
  jQuery(document).ready(function($) {

    // default behaviour is having the element's
    // opacity fade in when scrolled over
    $('.appear').appearOnScroll()


    // you can also override the default behaviour
    $('.appear').appearOnScroll({
      start: function(el) {
        // do something to element on start
      },
      end: function(el) {
        // do something to the element
        // when it's scrolled over
      }
    })


  })

*/

;(function($, window, document, undefined) {

  $.fn.appearOnScroll = function(options) {

    var $window = $(window),
        options = $.extend({
          offset   : 400,
          start: function(el) { el.css({opacity: 0}) },
          end: function(el) { el.animate({opacity: 1}) }
        }, options)

    return this.each(function() {

      var el = $(this)
      var scroll = function() {
        if (el.offset().top - options.offset < $window.scrollTop()) {
          options.end(el)
          $window.off('scroll', scroll)
        }
      }

      options.start(el)
      $window.scroll(scroll)

    })

  }

})(jQuery, window, document);