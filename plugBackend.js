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
                this.log('XMLHttpRequest err ' + e);
            }
        } else {
            this.log('missing posting method');
        }
    }
    ,
    Run: function () {
        this.Init();
        this.Loop();
    },
    Init: function () {
        this.log('Backend init');
        Slitherio.Top10.Init();
    },
    ReportTop10: function () {
        var top10 = Slitherio.Top10.getResults();
        this.PostJSON(top10);
        Slitherio.Top10.CleanUp();
    },
    ReportServers: function () {
        var servers = Slitherio.getServers();
        this.PostJSON(servers);
    },
    Report: function () {
    },
    Loop: function () {
        if (Slitherio.isPlaying()) {
            try {
                Slitherio.Top10.Collect();
            } catch (e) {
                this.log('collect err ' + e);
            }
        }
        window.setTimeout(function () {
            Backend.Loop();
        }, 2000);
    },
    log: function (msg) {
        console.log(msg);
    },
};

Backend.Run();