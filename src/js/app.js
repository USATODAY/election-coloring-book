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
      console.log(jQuery.fn.turn);
      jQuery("#flipbook").turn({
	    width: 800,
		height: 500,
		autoCenter: true
	  });
    };


    return app;

});
