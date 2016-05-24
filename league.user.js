// killboard - who killed who
// top scores

App = {
    Run: function () {
        this.log('pre-init');
        if (this.Init()) {
            this.AutoPlay();
        }else{
            // report problems
        }
    },
    CheckComponents: function () {
        if (Slitherio === void 0) {
            this.log('missing module: slitherio.js ');
        }
    },
    Init: function () {
        this.log('init; ver: ' + GM_info.version);
        var init_ok = true;
        init_ok = init_ok && this.CheckComponents();
        return init_ok;
    },
    log: function (msg) {
        console.log(msg);
    },
    AutoPlay: function () {
        this.Play();
        this.detectPlay();
    },
    Play: function () {
        window.setTimeout(function () {
            Slitherio.clickPlayButton();
        }, 2000);
    },
    detectPlay: function () {
        if (Slitherio.isPlaying()) {
            this.log('playing started');
            this.detectEndPlay();
        } else {
            window.setTimeout(function () {
                App.detectPlay();
            }, 500);
        }
    },
    detectEndPlay: function () {
        if (!Slitherio.isPlaying()) {
            this.log('playing stopped');
            this.AutoPlay();
        } else {
            window.setTimeout(function () {
                App.detectEndPlay()
            }, 1000);
        }
    },
};

App.Run();
