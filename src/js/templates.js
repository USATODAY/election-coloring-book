define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["book.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="flipbook" class="iapp-flipbook flipbook">\n    <div class="backbutton" ignore="1"><span class="nav-glyph">&#9668;</span></div>\n    <div class="iapp-page"> <img src="http://www.gannett-cdn.com/experiments/usatoday/2016/01/election-coloring-book/img/cover.jpg" alt=""> </div>\n    <div class="iapp-page"></div>\n    <div class=\'iapp-page\'> <img src="http://www.gannett-cdn.com/experiments/usatoday/2016/01/election-coloring-book/img/01.jpg" alt=""> </div>\n    <div class=\'iapp-page\'> <img src="http://www.gannett-cdn.com/experiments/usatoday/2016/01/election-coloring-book/img/02.jpg" alt=""> </div>\n    <div class=\'iapp-page\'> <img src="http://www.gannett-cdn.com/experiments/usatoday/2016/01/election-coloring-book/img/03.jpg" alt=""> </div>\n    <div class=\'iapp-page\'> <img src="http://www.gannett-cdn.com/experiments/usatoday/2016/01/election-coloring-book/img/04.jpg" alt=""> </div>\n    <div class=\'iapp-page\'> <img src="http://www.gannett-cdn.com/experiments/usatoday/2016/01/election-coloring-book/img/05.jpg" alt=""> </div>\n    <div class=\'iapp-page\'> <img src="http://www.gannett-cdn.com/experiments/usatoday/2016/01/election-coloring-book/img/06.jpg" alt=""> </div>\n    <div class=\'iapp-page\'> <img src="http://www.gannett-cdn.com/experiments/usatoday/2016/01/election-coloring-book/img/07.jpg" alt=""> </div>\n    <div class=\'iapp-page\'> <img src="http://www.gannett-cdn.com/experiments/usatoday/2016/01/election-coloring-book/img/08.jpg" alt=""> </div>\n    <div class=\'iapp-page\'> <img src="http://www.gannett-cdn.com/experiments/usatoday/2016/01/election-coloring-book/img/09.jpg" alt=""> </div>\n    <div class=\'iapp-page\'> <img src="http://www.gannett-cdn.com/experiments/usatoday/2016/01/election-coloring-book/img/10.jpg" alt=""> </div>\n    <div class=\'iapp-page\'> <img src="http://www.gannett-cdn.com/experiments/usatoday/2016/01/election-coloring-book/img/11.jpg" alt=""> </div>\n    <div class=\'iapp-page\'> <img src="http://www.gannett-cdn.com/experiments/usatoday/2016/01/election-coloring-book/img/12.jpg" alt=""> </div>\n    <div class=\'iapp-page\'> <img src="http://www.gannett-cdn.com/experiments/usatoday/2016/01/election-coloring-book/img/13.jpg" alt=""> </div>\n    <div class=\'iapp-page\'> <img src="http://www.gannett-cdn.com/experiments/usatoday/2016/01/election-coloring-book/img/14.jpg" alt=""> </div>\n    <div class="hard"></div>\n    <div class="forwardbutton" ignore="1"><span class="nav-glyph">&#9658;</span></div>\n</div>\n        \n';

}
return __p
};

this["templates"]["share.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="social">\n    <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/emoji-index/img/twitter.svg" alt="Twitter share"></a>\n    <a class="iapp-share-button iapp-share-popup" href="https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (stillimage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/05/broadway/images/fb.svg" class="" alt="Share"  border="0"></a>\n</div>\n<a href="' +
((__t = ( download_url )) == null ? '' : __t) +
'" download="' +
((__t = ( download_url )) == null ? '' : __t) +
'" class=" iapp-download"><div class=\'button iapp-download-button\'>Download</div></a>\n';

}
return __p
};

this["templates"]["template.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3>' +
((__t = (test)) == null ? '' : __t) +
'</h3>\n';

}
return __p
};

  return this["templates"];

});