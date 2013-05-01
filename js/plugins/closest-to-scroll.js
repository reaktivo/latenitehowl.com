(function($) {

  $.fn.closestToScroll = function(fn) {

    var self = this, $window = $(window)

    $window.scroll(function() {

      var distance, closest = null;

      self.each(function() {
        var el = $(this)
        var elDistance = Math.abs(el.offset().top - $window.scrollTop())
        console.log(this.id, elDistance)
        if (elDistance < distance || distance === undefined) {
          closest = el;
          distance = elDistance;
        }
      })

      if (closest) fn(closest);

    })

    return this

  }

})(jQuery)
