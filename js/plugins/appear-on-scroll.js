(function($) {

  $.fn.appearOnScroll = function(options) {

    var $window = $(window),
        options = $.extend({
          offset   : 400,
          selector : '.appear',
          start: function(el) { el.css({opacity: 0}) },
          end: function(el) { el.animate({opacity: 1}) }
        }, options)

    $(options.selector, this).each(function() {

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

    return this;

  }

})(jQuery)