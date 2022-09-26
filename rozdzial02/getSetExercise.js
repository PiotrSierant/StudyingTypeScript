class SpeakerExercise {
    constructor(name) {
        this.name = name;
    }
    get Message() {
        if (!this.message.includes(this.name)) {
            throw Error("W komunikacie brakuje imienia.");
        }
        return this.message;
    }
    set Message(val) {
        let tmpMessage = val;
        if (!val.includes(this.name)) {
            tmpMessage = `${this.name} ${val}`;
        }
        this.message = tmpMessage;
    }
}
const speakerExercise = new SpeakerExercise("Piotr");
speakerExercise.Message = "Cześć";
console.log(speakerExercise.Message);
