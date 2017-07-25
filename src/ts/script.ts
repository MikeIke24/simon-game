class GameLogic {
    chancesLeft: number;
    strictMode: boolean;
    strictButtonLight: any;
    constructor(strictMode: boolean) {
        this.strictMode = strictMode;
        this.chancesLeft = strictMode ? 0 : 1;
    }
    gameReset() {

    }
    strictClick() {
        console.log('t');
        if (switchControls.onSwitch) {
            this.strictButtonLight = document.getElementsByClassName('strict-light');
            if (!this.strictMode) {
                this.strictMode = !this.strictMode;
                this.strictButtonLight[0].style.filter = 'brightness(1.9)';
            } else {
                this.strictMode = !this.strictMode;
                this.strictButtonLight[0].style.filter = 'brightness(0.6)';
            }
        }
    }

}

class SwitchLogic {
    onSwitch: boolean = false;
    startLight: boolean = false;
    strictLight: boolean = false;
    switch: any;
    onToggle() {
        this.onSwitch = !this.onSwitch;
        this.switch = document.getElementsByClassName('switch');
        console.log(this.switch[0].style.position);
        if (this.onSwitch) {
            this.switch[0].style.transition = 'left 0.5s ease';
            this.switch[0].style.left = '1.8rem';
            turningOnSequence();
        } else {
            this.switch[0].style.transition = 'left 0.5s ease';
            this.switch[0].style.left = '0.4rem';
            turningOffSequence();
        }
    }
}

class StartButtonLogic {
    startButtonLight: any;
    startClick() {
        if (switchControls.onSwitch) {
            this.startButtonLight = document.getElementsByClassName('start-light');
            this.startButtonLight[0].style.filter = 'brightness(1.9)';
            changeCountText('0');
        }
    }
}

function turningOffSequence() {
    if (startControls.startButtonLight) {
        startControls.startButtonLight[0].style.filter = 'brightness(0.6)';
    } else if (gameControls.strictButtonLight) {
        gameControls.strictButtonLight[0].style.filter = 'brightness(0.6)';
    }
    removeClasses(['btn', 'inner-btn']);
    changeCountText('');
}

function turningOnSequence() {
    addClasses(['btn', 'inner-btn']);
    changeCountText('--');
}

function changeCountText(text: string) {
    let count = document.getElementsByClassName('count-text');
    count[0].textContent = text;
}

function addClasses(classNames: string[]) {
    for (let j = 0; j < classNames.length; j++) {
        let elements = document.getElementsByClassName(classNames[j]);
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.add(classNames[j] + 'H');
        }
    }
}

function removeClasses(classNames: string[]) {
    for (let j = 0; j < classNames.length; j++) {
        let elements = document.getElementsByClassName(classNames[j]);
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove(classNames[j] + 'H');
        }
    }
}

let switchControls = new SwitchLogic();
let startControls = new StartButtonLogic();
let gameControls = new GameLogic(false);
console.log(gameControls.strictMode, gameControls.chancesLeft);