// ==UserScript==
// @name         slitherio-league
// @namespace    http://slither.io/
// @version      1.0.2
// @description  slitherio-league
// @author       Daniel Peder & David Bender
// @match        http://slither.io/
// @grant        none
// ==/UserScript==

// killboard - who killed who
// top scores

var App = function () {

    return {
        Run: function () {
            this.Init();
            this.detectPlay();
        },
        Init: function () {
            this.log('init');
        },
        log: function (msg) {
            console.log(msg);
        },
        detectPlay: function () {
            if (!Slitherio.isPlaying()) {
                window.setTimeout(App.detectPlay, 300);
            } else {
                this.log('playing');
                this.detectEndPlay();
            }
        },
        detectEndPlay: function () {
            if (!Slitherio.isPlaying()) {
                window.setTimeout(App.detectEndPlay, 1000);
            } else {
                this.log('end playing');
                this.detectPlay()
            }
        },
    }

};

App.Run();
