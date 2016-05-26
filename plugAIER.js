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
        this.setPlayState(true);
    },
    Tick: function () {
        if (!this.setPlayState()) {
            return;
        }
        window.xm = Math.floor(Math.random() * 100) - 50;
        window.ym = Math.floor(Math.random() * 100) - 50;
        window.setTimeout(AIER.Tick, Math.floor(Math.random() * 2000 + 500));
    },
    Stop: function () {
        this.setPlayState(false);
    },
};