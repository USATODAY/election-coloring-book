define(
  [
    'jquery',
    'underscore',
    'templates',
    'jquery-turn'
  ],
  function(jQuery, _, templates){
    var app = app || {};

    app.init = function() {
      setupBook();
    };

    function setupBook() {
        var winWidth = window.innerWidth;
        var width = winWidth < 800 ? winWidth : 800;
        jQuery("#flipbook").turn({
            width: width,
            height: width / 1.6,
            autoCenter: true
        });
    }


    return app;

});
