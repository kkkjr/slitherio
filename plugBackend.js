Backend = {
    _: {
        //url: 'http://app.zone.cz/slitherio_league_backend/',
        url: 'http://192.168.0.201/slitherio_league_backend/',
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
    Report: function () {
        var raw = JSON.stringify({
            demo: 'data',
            demo_ts: (new Date()).valueOf(),
        });
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

Backend.Run();