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
    getCurrentIP: function () {
        return window.bso.ip;
    },
    isPlaying: function () {
        return window.playing;
    },
    clickPlayButton: function () {
        window.play_btn.elem.click();
    },
    Top10: {
        table: null,
        getResults: function () {
            return this.table;
        },
        Collect: function () {
            var nsis = document.querySelectorAll('div.nsi');
            if (!nsis.length) {
                return;
            }
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
                nsi_scores = nsis[i].querySelectorAll('span');
                nsi_names = nsis[i + 1].querySelectorAll('span');
                break;
            }
            if (!nsi_scores || !nsi_scores.length) {
                return;
            }
            for (var i = 0; i < 10; i++) {
                var name = nsi_names[i].innerText, score = nsi_scores[i].innerText;
                if (!i && score > this.table.top_score) {
                    this.table.top_score = score;
                }
                if (!name.trim().length) {
                    continue;
                }
                this.table.scores[name] = score;
            }
        },
        CleanUp: function () {
            this.table = {server: Slitherio.getCurrentIP(), scores: {}, top_score: 0};
        },
        Init: function () {
            this.CleanUp();
        }
    },
};
