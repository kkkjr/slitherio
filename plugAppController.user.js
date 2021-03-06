// killboard - who killed who
// top scores
//

// AppController - Artifical Intelligence -er

AppController = {
    Run: function () {
        this.log('pre-init');
        if (this.Init()) {
            this.AutoPlay();
        } else {
            // report problems
            this.log('init failed');
        }
    },
    CheckComponents: function () {
        var isok = true;
        if (Slitherio === void 0) {
            this.log('missing module: slitherio.js ');
            isok = false;
        }
        return isok;
    },
    Init: function () {
        this.log('init');
        var init_ok = true;
        init_ok = init_ok && this.CheckComponents();
        return init_ok;
    },
    AutoPlay: function () {
        this.Play();
        this.detectPlay();
        this.RefreshCheck(); // sometimes do refresh for healthy run
    },
    Play: function () {
        Slitherio.setNick();
        window.setTimeout(function () {
            Slitherio.clickPlayButton();
        }, 2000);
    },
    detectPlay: function () {
        if (Slitherio.isPlaying()) {
            this.log('playing started');
            this.logVersion();
            AIER.Play();
            this.detectEndPlay();
        } else {
            window.setTimeout(function () {
                AppController.detectPlay();
            }, 500);
        }
    },
    detectEndPlay: function () {
        if (!Slitherio.isPlaying()) {
            this.log('playing stopped');
            AIER.Stop();
            Backend.ReportTop10();
            this.AutoPlay();
        } else {
            // while still playing
            Backend.ReportFoods();
            
            // continue
            window.setTimeout(function () {
                AppController.detectEndPlay()
            }, 1000);
        }
    },
    log: function (msg) {
        console.log(msg);
    },
    RefreshCheck_: 5, // how many times to refresh
    RefreshCheck: function () {
        if (this.RefreshCheck_-- <= 0) {
            try {
                Backend.ReportServers();
            } catch (e) {
                AppController.log('backedn report servers err' + e);
            }
            AppController.log('Refresh issued');
            window.setTimeout(function () {
                AppController.log('Refreshing now ...');
                location.reload(true); // force full reload without cache
            }, 1000);
        } else {
            this.log('Plays to refresh #' + this.RefreshCheck_);
        }

    },
    getVersion: function () {
        return GM_info.script.version;
    },
    logVersion: function () {
        this.log('script ver: ' + this.getVersion());
    }
};

console.log('AppController Run');
AppController.Run();
