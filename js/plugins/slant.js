(function($) {

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

