class Apple {
    constructor() {
        this.weight = 10;
    }
}
class Human {
    constructor(name,gender,weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale(){
        if (this.gender == 'male'){
            console.log(`${this.name} la nam`);
        } else {
            console.log(`${this.name} la nu`);
        }
    }

    setGender(male){
        this.gender = male;
    }

    setGender(female){
        this.gender = female;
    }

    checkApple(apple){
        return apple.weight;
    }

    eat(apple){
        if (apple.weight > 0){
            this.weight++;
            apple.weight--;
        }
    }

    say(word){
        alert(word);
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getWeight(){
        return this.weight;
    }

    setWeight(){
        this.weight = weight;
    }
}