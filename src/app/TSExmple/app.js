var Personne = /** @class */ (function () {
    function Personne(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Personne.prototype.setAge = function (newAge) {
        this.age = newAge;
    };
    Personne.prototype.getAge = function () {
        return this.age;
    };
    return Personne;
}());
var people = [];
function init() {
    var firstName = document.getElementById('first-name');
    var lastName = document.getElementById('last-name');
    var age = document.getElementById('age');
    var button = document.getElementById('submit-button');
    button.onclick = function () {
        var person = new Personne(firstName, lastName, age);
        onButtonClick(person);
    };
}
function onButtonClick(person) {
    people.push(person);
    console.log('Given people is', people);
}
init();
