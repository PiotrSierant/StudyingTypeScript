var Speaker = /** @class */ (function () {
    function Speaker(name) {
        this.name = name;
    }
    Object.defineProperty(Speaker.prototype, "Message", {
        get: function () {
            if (!this.message.includes(this.name)) {
                throw Error("W komunikacie brakuje imienia mówcy.");
            }
            return this.message;
        },
        set: function (val) {
            var tmpMessage = val;
            if (!val.includes(this.name)) {
                tmpMessage = this.name + " " + val;
            }
            this.message = tmpMessage;
        },
        enumerable: true,
        configurable: true
    });
    return Speaker;
}());
var speaker = new Speaker("Janek");
speaker.Message = "cześć";
console.log(speaker.Message);
