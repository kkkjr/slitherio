Slitherio = {
    getSnakes: function () {
        return window.snakes;
    },
    getSnake: function () {
        return window.snake;
    },
    getFoods: function () {
        return window.foods;
    },
    isPlaying: function () {
        return window.playing;
    },
    clickPlayButton: function () {
        window.play_btn.elem.click();
    },
    getSnakeTrackables: function () {
        var snakes = this.getSnakes();
        var trackables = [];
        for (var i = 0, imax = snakes.length; i < imax; i++) {
            trackables.push(this.getSnakeTrackable(snakes[i]));
        }
        return trackables;
    },
    getSnakeTrackable: function (snake) {
        return {
            id: snake.id,
            nk: snake.nk,
            dead_amt: snake.dead_amt,
            alive_amt: snake.alive_amt,
            spang: snake.spang,
            edir: snake.edir,
            iiv: snake.iiv,
            dir: snake.dir,
        };
    },
};
