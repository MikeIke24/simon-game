var GameLogic = (function () {
    function GameLogic(strictMode) {
        this.strictMode = strictMode;
        this.chancesLeft = strictMode ? 0 : 1;
        this.strictButtonLight = document.getElementsByClassName('strict-light');
    }
    GameLogic.prototype.gameReset = function () {
    };
    GameLogic.prototype.strictClick = function () {
        if (switchControls.onSwitch) {
            changeCountText('0');
            if (!this.strictMode) {
                this.strictMode = !this.strictMode;
                this.strictButtonLight[0].style.filter = 'brightness(1.9)';
            }
            else {
                this.strictMode = !this.strictMode;
                this.strictButtonLight[0].style.filter = 'brightness(0.6)';
            }
        }
    };
    GameLogic.prototype.btnClick = function () {
    };
    return GameLogic;
}());
var SwitchLogic = (function () {
    function SwitchLogic() {
        this.onSwitch = false;
        this.startLight = false;
        this.strictLight = false;
    }
    SwitchLogic.prototype.onToggle = function () {
        this.onSwitch = !this.onSwitch;
        this["switch"] = document.getElementsByClassName('switch');
        console.log(this["switch"][0].style.position);
        if (this.onSwitch) {
            this["switch"][0].style.transition = 'left 0.5s ease';
            this["switch"][0].style.left = '1.8rem';
            turningOnSequence();
        }
        else {
            this["switch"][0].style.transition = 'left 0.5s ease';
            this["switch"][0].style.left = '0.4rem';
            turningOffSequence();
        }
    };
    return SwitchLogic;
}());
var StartButtonLogic = (function () {
    function StartButtonLogic() {
    }
    StartButtonLogic.prototype.startClick = function () {
        if (switchControls.onSwitch) {
            this.startButtonLight = document.getElementsByClassName('start-light');
            this.startButtonLight[0].style.filter = 'brightness(1.9)';
            changeCountText('0');
        }
    };
    return StartButtonLogic;
}());
function turningOffSequence() {
    if (startControls.startButtonLight) {
        startControls.startButtonLight[0].style.filter = 'brightness(0.6)';
        gameControls.strictButtonLight[0].style.filter = 'brightness(0.6)';
    }
    removeClasses(['btn', 'inner-btn']);
    changeCountText('');
}
function turningOnSequence() {
    addClasses(['btn', 'inner-btn']);
    changeCountText('--');
}
function changeCountText(text) {
    var count = document.getElementsByClassName('count-text');
    count[0].textContent = text;
}
function addClasses(classNames) {
    for (var j = 0; j < classNames.length; j++) {
        var elements = document.getElementsByClassName(classNames[j]);
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add(classNames[j] + 'H');
        }
    }
}
function removeClasses(classNames) {
    for (var j = 0; j < classNames.length; j++) {
        var elements = document.getElementsByClassName(classNames[j]);
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove(classNames[j] + 'H');
        }
    }
}
var switchControls = new SwitchLogic();
var startControls = new StartButtonLogic();
var gameControls = new GameLogic(false);
