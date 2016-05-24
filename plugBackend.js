Backend = {
    _: {
        url: 'http://192.168.0.201/slitherio_league_backend/',
    },
    PostJSON: function (json) {
        var raw = JSON.stringify(json);
        this.PostRaw(raw);
    },
    PostRaw: function (raw) {
        //console.log('post raw go');
        if (window.XMLHttpRequest) {
            try {
                xmlhttp = new XMLHttpRequest();
                xmlhttp.open('POST', Backend._.url, true);
                xmlhttp.send(raw);
            } catch (e) {
                console.log('XMLHttpRequest err ' + e);
            }
        } else {
            console.log('missing posting method');
        }
    }
    ,
    Run: function () {
        this.Init();
        this.Loop();
    },
    Init: function () {
        console.log('Backend init');
    },
    ReportTop10: function (top10) {
        this.PostJSON(top10);
    },
    Report: function () {
        var snakes = Slitherio.getSnakeTrackables();
        var raw = JSON.stringify(snakes);
        Backend.PostRaw(raw);
    },
    Loop: function () {
        if (Slitherio.isPlaying()) {
            Backend.Report();
        }
        window.setTimeout(function () {
            Backend.Loop();
        }, 1000);
    },
};

//Backend.Run();