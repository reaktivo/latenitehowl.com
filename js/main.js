(function($, context){

  context.App = {

    init: function() {

      this.window = $(window)
      this.intro = $('#intro')
      this.nav = $('nav')
      this.lnh = $('#late-nite-howl')
      this.introHeight = this.intro.outerHeight()
      this.navHeight = 0
      this.navOffset = 0


      WebFontConfig.ready($.proxy(this, 'animateIn'))

      $('#bio .text p').slant(-3)
      $('#bio .text').toggler()

      this.window
        .scroll($.proxy(this, 'scroll'))
        .resize($.proxy(this, 'resize'))

      this.window.scrollTop(0)
      this.lnh.hide()
      this.updateSectionHeight()

      this.resize()
      this.scroll()

    },

    animateIn: function() {
      this.lnh.show().animateWords()
      this.nav.slideDown($.proxy(this, 'resize'))
    },

    resize: function() {
      this.navHeight = this.nav.outerHeight()
      this.navOffset = this.intro.outerHeight() - this.navHeight;
      $('nav a', this.intro).smoothScroll({offset: - this.navHeight})
    },

    scroll: function() {
      this.nav.toggleClass('fixed', this.window.scrollTop() >= this.navOffset)
      this.updateSectionHeight()
    },

    updateSectionHeight: function() {
      var windowHeight = this.getViewport().height;
      $('.sections > section').each(function(i) {
        var section = $(this)
        if (windowHeight > section.outerHeight()) {
          section.css({height: windowHeight})
        }
      })
    },

    getViewport: function() {

      if (typeof window.innerWidth != 'undefined') {
        return {
          width: window.innerWidth,
          height: window.innerHeight
        }
      } else {
        return {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
        }
      }
    },

    toggleText: function(e) {

      var el = $(e.currentTarget)


    }

  }

  $(document).ready($.proxy(context.App, 'init'))

})(jQuery, this)