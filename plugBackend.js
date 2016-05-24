Backend = {
    _: {
        url: 'http://app.zone.cz/slitherio_league_backend/',
    },
    PostRaw: function (raw) {
        console.log('post raw go');
        if (GM_xmlhttpRequest) {
            try {
                var response = GM_xmlhttpRequest({
                    method: "POST",
                    url: Backend._.url,
                    data: raw,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    onload: function (response) {
                        console.log('post raw done');
                        console.log(response);
                    }
                });
                console.log('post response');
                console.log(response);
            } catch (e) {
                console.log('GM_xmlhttpRequest err ' + e);
            }
        }
        else
        if (XMLHttpRequest) {
            try {
                xmlhttp = new XMLHttpRequest();
                xmlhttp.open('POST', Backend._.url, true);
                xmlhttp.send('hello there');
            } catch (e) {
                console.log('XMLHttpRequest err ' + e);
            }
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