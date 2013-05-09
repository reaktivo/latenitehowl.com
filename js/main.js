(function($, context, undefined){

  context.App = {

    init: function() {

      this.window = $(window)
      this.sections = $('.sections > section')
      this.intro = $('#intro')
      this.nav = $('nav')
      this.lnh = $('#late-nite-howl')
      this.navHeight = 0
      this.navOffset = 0

      WebFontConfig.ready($.proxy(this, 'animateIn'))

      $('#bio .text p').slant(-3)
      $('#bio .text').toggler()
      if(this.sections.length > 1) {
        $('.appear').appearOnScroll()
      }

      this.window
        .on('scroll orientationchange', $.proxy(this, 'scroll'))
        .resize($.proxy(this, 'resize')).resize()

      this.window.scrollTop(0)
      this.updateSectionHeight()
      this.setupHistory()

    },

    setupHistory: function() {

      if ( !Modernizr.history ) return;

      this.sections.closestToScroll(function(el) {
        var path = "/" + el.attr('id')
        if (document.location.pathname != path) {
          history.replaceState(null, null, path)
        }
      })

      $('a', this.nav).click(function() {
        page($(this).attr('href'));
        return false;
      })

      page('/:section', $.proxy(this, 'section'))
      page.start()
    },

    section: function(ctx, next) {
      var target = $('#' + ctx.params.section)

      if (target.length === 0) return next()

      $.smoothScroll({
        offset: - this.navHeight,
        scrollTarget: target
      })
    },

    animateIn: function() {
      this.showNav();
      this.lnh
        .css({display: 'table-cell'})
        .animateWords()
    },

    showNav: function(delay) {
      delay = delay || 0;
      this.nav.delay(delay).slideDown($.proxy(this, 'resize'))
    },

    resize: function() {
      this.navHeight = this.nav.outerHeight()
      this.navOffset = this.nav.closest('section').outerHeight() - this.navHeight;
    },

    scroll: function() {
      this.nav.toggleClass('fixed', this.window.scrollTop() >= this.navOffset)
    },

    updateSectionHeight: function() {
      var windowHeight = this.getViewport().height;
      this.sections.each(function(i) {
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