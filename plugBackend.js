Backend = {
    _: {
        url: 'http://192.168.0.201/slitherio_league_backend',
    },
    PostRaw: function (raw) {
        GM_xmlhttpRequest({
            method: "POST",
            url: this._.url,
            data: raw,
            headers: {
                "Content-Type": "application/json"
            },
            onload: function (response) {
                console.log('post raw done');
                console.log(response);
            }
        });
    },
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
            demo_ts: (new Date())
        });
        this.PostRaw(raw);
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