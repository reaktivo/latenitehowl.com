<?
  $sections = array('intro', 'bio', 'shows', 'music', 'contact');

  $section =  ltrim($_SERVER['REQUEST_URI'], '/');

  if (in_array($section, $sections)) {
    $sections = array($section);
  }

?><!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Late Nite Howl</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
        <script>
          window.WebFontConfig = {
            google: { families: ['Oswald:400,300:latin'] },
            listeners: [],
            active: function() {
              this.called_ready = true;
              for(var i = 0; i < this.listeners.length; i++) {
                this.listeners[i]();
              }
            },
            ready: function(callback) {
              if (this.called_ready) {
                callback()
              } else {
                this.listeners.push(callback)
              }
            }
          };
          (function() {
            var wf = document.createElement('script');
            wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
              '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
          })();
        </script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->


        <div class="sections">

          <? foreach ($sections as $i => $section): ?>
            <section id="<?= $section ?>">
              <? readfile("./sections/{$section}.php") ?>
              <? if ($i === 0) readfile('./nav.php') ?>
            </section>

          <? endforeach ?>

        </div>




        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>
        <script src="js/vendor/jquery.smooth-scroll.js"></script>
        <script src="js/vendor/page.js"></script>
        <script src="js/plugins/animate-words.js"></script>
        <script src="js/plugins/appear-on-scroll.js"></script>
        <script src="js/plugins/closest-to-scroll.js"></script>
        <script src="js/plugins/slant.js"></script>
        <script src="js/plugins/toggler.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src='//www.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
