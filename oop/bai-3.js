class Mobile {
    constructor() {
        this.battery = 100;
        this.input = [];
        this.output = [];
        this.message = '';
        this.status = true;
    }
    checkTurnOn(){
        if (this.status){
            alert('dien thoai dang bat');
        } else {
            alert('dien thoai chua duoc bat');
        }
    }

    turnOn(){
        this.status = true;
    }

    charge(){
        while (this.battery < 100){
            this.battery++;
        }
    }

    writeMessage(message){
        this.message = 'message';
        this.battery--;
    }

    receiveMessage(message){
        this.input.push(message);
        this.battery--;
    }

    sendMessage(phone,message){
        this.output.push(message);
        phone.input.push(message);
        this.battery--;
    }

    viewMessageReiceived(){
        return this.input;
        this.battery--;
    }

    viewMessSent(){
        return this.output;
        this.battery--;
    }
}