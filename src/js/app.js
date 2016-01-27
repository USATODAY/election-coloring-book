define(
  [
    'jquery',
    'underscore',
    'templates',
    'api/analytics',
    'config',
    'jquery-turn'
  ],
  function(jQuery, _, templates, Analytics, config){
    var app = app || {};

    var $sharePopups;

    var SHARE_TEXT = 'Check out USA TODAYs 2016 political coloring book';
    var DOWNLOAD_URL = 'http://www.gannett-cdn.com/experiments/usatoday/2016/01/election-coloring-book/color_book_print.pdf.zip';

    var maxWidth = 1000;
    app.init = function() {
        setupBook();
        jQuery('.iapp-page-share-wrap').html(templates['share.html'](createShare(SHARE_TEXT)));
        $sharePopups = jQuery('.iapp-share-popup');
        addEvents();
    };

    function addEvents() {
        $sharePopups.on('click', function(e) {
            console.log('share');
            e.preventDefault();
            Analytics.trackEvent('2016-coloring-book-share-clicked');
            windowPopup(e.currentTarget.href, 500, 300);
        });
        window.addEventListener('resize', _.throttle(setupBook, 500));
    }


    function setupBook() {
        var winWidth = window.innerWidth;
        var width = winWidth < maxWidth ? winWidth : maxWidth;
        jQuery("#flipbook").turn({
            width: width,
            height: width / 1.6,
            autoCenter: true
        });
    }

    function createShare(shareString) {
        var shareURL = window.location.href;
        var fbShareURL = encodeURI(shareURL.replace('#', '%23'));
        var twitterShareURL = encodeURIComponent(shareURL);
        var emailLink = "mailto:?body=" + encodeURIComponent(shareString) +  "%0d%0d" + twitterShareURL + "&subject=";
        
        return {
            'fb_id': config.fb_app_id,
            fbShare:  encodeURI(shareURL.replace('#', '%23')),
            stillimage: "http://www.gannett-cdn.com/experiments/usatoday/2015/05/broadway/images/fb-post.jpg",
            encodedShare: encodeURIComponent(shareString),
            fb_redirect: 'http://' + window.location.hostname + '/pages/interactives/fb-share/',
            email_link: "mailto:?body=" + encodeURIComponent(shareString) +  "%0d%0d" + encodeURIComponent(shareURL) + "&subject=",
            download_url: DOWNLOAD_URL,
            twitterShare: encodeURIComponent(shareURL)
        };

    }

    function windowPopup(url, width, height) {
        // Calculate the position of the popup so
        // it’s centered on the screen.
        var left = (screen.width / 2) - (width / 2),
        top = (screen.height / 2) - (height / 2);

        window.open(
            url,
            "",
            "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
        );
    }



    return app;

});
