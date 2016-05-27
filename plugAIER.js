AIER = {
    _: {
        play: false,
    },
    setPlayState: function (state) {
        if (state !== void 0) {
            this._.play = state;
        }
        return this._.play && true;
    },
    Play: function () {
        console.log('AIER Play');
        this.setPlayState(true);
    },
    Tick: function () {
        if (!AIER.setPlayState()) {
            return;
        }
        window.xm = Math.floor(Math.random() * 100) - 50;
        window.ym = Math.floor(Math.random() * 100) - 50;
        console.log(['xm/ym', window.xm, window.ym].join(' | '));
        window.setTimeout(AIER.Tick, Math.floor(Math.random() * 2000 + 500));
    },
    Stop: function () {
        console.log('AIER Stop');
        this.setPlayState(false);
    },
};