var Student = (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return ("Hello, " + person.firstName + " " + person.middleName + " " + person.lastName);
}
var user = new Student("Nimish", "David", "Mathew");
document.body.innerHTML = greeter(user);
