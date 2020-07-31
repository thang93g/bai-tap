class ElectricLamp {
    constructor(status) {
        this.status = status;
    }
    turnOn(){
        this.status = true;
    }
    turnOff(){
        this.status = false;
    }
}
class SwitchButton {
    constructor(status) {
        this.status = status;
    }
    connectToLamp(lamp){
        this.lamp = lamp;
    }

    turnOn(){
        lamp.status = true;
    }

    turnOff(){
        lamp.status = false;
    }
}