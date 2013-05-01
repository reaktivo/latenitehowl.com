(function($) {

  $.fn.toggler = function() {

    $('*[data-show], *[data-hide]', this).each(function() {

      var el = $(this)

      el.click(function(e) {
        $(el.data('show')).removeClass('hidden')
        $(el.data('hide')).addClass('hidden')
        return false
      });

      if (el.data('default')) el.click()

    });

    return this;

  }

})(jQuery)