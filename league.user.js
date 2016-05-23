// killboard - who killed who
// top scores

App = {
    Run: function () {
        this.log('pre-init');
        this.CheckComponents();
        this.Init();
        this.detectPlay();
    },
    CheckComponents: function () {
        if (Slitherio) {
            this.log('slitherio object:' + Slitherio);
        } else {
            this.log('missing slitherio object');
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
            this.log('detect play');
            window.setTimeout(function () {
                App.detectPlay();
            }, 300);
        } else {
            this.log('playing');
            this.detectEndPlay();
        }
    },
    detectEndPlay: function () {
        if (!Slitherio.isPlaying()) {
            window.setTimeout(function () {
                App.detectEndPlay()
            }, 1000);
        } else {
            this.log('end playing');
            this.detectPlay()
        }
    },
};

App.Run();
