Backend = {
    _: {
        url: 'http://192.168.0.201/slitherio_league_backend/',
    },
    getUrl: function (report) {
        var url = Backend._.url.toString();
        if (report) {
            url += '?' + ['report', report].join('=');
        }
        return  url;
    },
    PostJSON: function (json) {
        var report = 'default';
        if (json['report']) {
            report = json['report'].toString();
        }
        var raw = JSON.stringify(json);
        this.PostRaw(raw, report);
    },
    PostRaw: function (raw, report) {
        //console.log('post raw go');
        if (window.XMLHttpRequest) {
            try {
                xmlhttp = new XMLHttpRequest();
                xmlhttp.open('POST', Backend.getUrl(report), true);
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
        this.PostJSON({report: 'Top10', script_version: AppController.getVersion(), data: top10});
        Slitherio.Top10.CleanUp();
    },
    ReportServers: function () {
        var servers = Slitherio.getServers();
        this.PostJSON({report: 'Servers', script_version: AppController.getVersion(), data: servers});
    },
    ReportFoods: function () {
        this.Report('Foods', Slitherio.getFoods());
    },
    Report: function (report, data) {
        this.PostJSON({'report': report, script_version: AppController.getVersion(), data: data});
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