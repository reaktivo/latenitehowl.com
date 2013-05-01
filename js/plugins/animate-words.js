(function($) {

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

})(jQuery)