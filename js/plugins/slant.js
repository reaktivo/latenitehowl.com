/*
 * slant.js - v1.0.0 - 2013-04-22
 * Marcel Miranda < reaktivo.com >
 * Copyright (c) 2013; Licensed MIT

  slant is a jQuery plugin that will
  make a block of text slanted. This
  is done by setting splitting each
  word in a block of text and adding
  `left: x` css to each line.


  Usage:

  // when dom ready
  jQuery(document).ready(function($) {

    // This will apply a 3px slant on
    // each line in the paragraph.
    $('body p').slant(-3)

  })


  Note:
  Your css style should include the following to
  make the slant visible:

  .line { position: relative }


*/

;(function($, window, document, undefined) {


  $.fn.slant = function(slant) {

    var matches = this;
    if (matches.length > 1) {
      $.each(matches, function() {
        $(this).slant(slant);
      })
      return;
    }
    var self = this
    ,   words = this.text().split(' ')
    ,   html = $.map(words, function(word) {
      return "<span class=line>" + word + "</span> "
    })

    this.html(html)

    $(window).resize(function() {

      var line = 0, currentTop;
      $('.line', self).each(function() {
        var word = $(this)
        ,   top  = word.offset().top

        if (top != currentTop) {
          currentTop = top;
          line++;
        }
        word.css({
          left: slant * line
        })
      })

    }).resize()

    return this

  }

})(jQuery, window, document);
