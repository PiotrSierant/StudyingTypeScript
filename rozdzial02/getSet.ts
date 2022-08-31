class Speaker {
    private message: string;
    constructor(private name: string) {}

    get Message() {
        if(!this.message.includes(this.name)){
            throw Error("W komunikacie brakuje imienia mówcy.");
        }
        return this.message;
    }

    set Message(val: string) {
        let tmpMessage = val;
        if(!val.includes(this.name)){
            tmpMessage = this.name + " " + val;
        }
        this.message = tmpMessage;
    }
}

const speaker = new Speaker("Janek");
speaker.Message = "cześć";
console.log(speaker.Message);