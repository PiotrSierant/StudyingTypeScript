// let val: unknown = 22;
// val = "to jest łańcuch";
// val = new Array();
// val.push(33); // error (podkreślona metoda push, typ unknown przepuszcza.)
// console.log(val);
var val = 22;
val = "to jest łańcuch";
val = new Array();
if (val instanceof Array) {
    val.push(33);
}
console.log(val);
