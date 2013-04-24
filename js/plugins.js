// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


// jQuery.animate


(function($) {
  $.fn.animateWords = function(options) {

    options = $.extend({
      delay: 1000,
      start: {opacity: 0},
      end: {opacity: 1},
      splitter: " ",
      'class': 'animatable'
    }, options)

    var deferred = $.Deferred()

    var words = this.text().split(options.splitter)
    var html = $.map(words, function(word) {
      return "<span class=" + options['class'] + ">" + word + "</span>"
    })

    this.html(html.join(options.splitter))

    $('.' + options['class'], this)
      .css(options.start)
      .each(function(i) {
        $(this)
          .delay(options.delay * i)
          .animate(options.end)
      })


    return this
  }

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

})(jQuery)