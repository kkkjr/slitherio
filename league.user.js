// ==UserScript==
// @name         slitherio-league
// @namespace    http://slither.io/
// @version      1.0.5
// @description  slitherio-league
// @author       Daniel Peder & David Bender
// @match        http://slither.io/
// @grant        none
// ==/UserScript==

// killboard - who killed who
// top scores

App = {
    Run: function () {
        this.log('pre-init')
        this.Init();
        this.detectPlay();
    },
    CheckComponents: function () {
        if (!Slitherio) {
            this.log('missing component Slitherio');
        }
    },
    Init: function () {
        this.log('init');
    },
    log: function (msg) {
        console.log(msg);
    },
    detectPlay: function () {
        if (!Slitherio.isPlaying()) {
            window.setTimeout(this.detectPlay, 300);
        } else {
            this.log('playing');
            this.detectEndPlay();
        }
    },
    detectEndPlay: function () {
        if (!Slitherio.isPlaying()) {
            window.setTimeout(this.detectEndPlay, 1000);
        } else {
            this.log('end playing');
            this.detectPlay()
        }
    },
};

App.Run();
