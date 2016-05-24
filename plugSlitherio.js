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
            console.log('collecting...');
            var nsis = document.querySelectorAll('div.nsi');
            if (!nsis.length) {
                return;
            }
            console.log('nsis...');
            var nsi_scores, nsi_names;
            for (var i = 0, imax = nsis.length; i < imax; i++) {
                var nsi = nsis[i];
                console.log('nsi class ' + nsi.className);
                if (nsi.className !== 'nsi') {
                    continue;
                }
                var nsi_items = nsi.querySelectorAll('span');
                if (nsi_items.length !== 10) {
                    continue;
                }
                nsi_scores = nsis[i + 1].querySelectorAll('span');
                nsi_names = nsis[i + 2].querySelectorAll('span');
            }
            if (!nsi_scores.length) {
                return;
            }
            console.log('scores...');
            for (var i = 0; i < 10; i++) {
                var name = nsi_names[i].innerText, score = nsi_scores[i].innerText;
                if (!name.trim().length) {
                    continue;
                }
                this.table[name] = score;
                console.log(['score', name, score].join(" : "));
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
