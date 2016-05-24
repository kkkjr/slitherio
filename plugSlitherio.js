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
    Top10: {
        table: {},
        getResults: function () {
            return this.table;
        },
        Collect: function () {
            var nsis = document.querySelectorAll('div.nsi');
            var nsi_scores, nsi_names;
            for (var i = 0, imax = nsis.length; i < imax; i++) {
                var nsi = nsis[i];
                if (nsi.className !== 'nsi') {
                    continue;
                }
                var nsi_items = nsi.querySelectorAll('span');
                if (nsi_items.length !== 10) {
                    continue;
                }
                nsi_scores = nsi_items;
                nsi_names = nsis[i + 1].querySelectorAll('span');
            }
            for (var i = 0; i < 10; i++) {
                var name = nsi_names[i].innerText, score = nsi_scores[i].innerText;
                if (!name.trim().length) {
                    continue;
                }
                this.table[name] = score;
            }
        },
        CleanUp: function () {
            this.table = {};
        },
        Init: function () {
            this.CleanUp();
        }
    },
};
