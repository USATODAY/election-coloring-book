/* jshint unused: false */
define([
    'jquery',
    'underscore',
    'backbone'
],
    function ($, _, Backbone) {
        'use strict';
        
        return {
            trackEvent: function (trackLabel, destinationUrl) {
                console.log('Track Event: ', trackLabel);
            },
            trackPageView: function (infoObj) {
                console.log('Track page view: ', infoObj);
            },
        };
    });
