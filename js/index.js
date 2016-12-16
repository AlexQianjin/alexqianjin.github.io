var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        var fullName = this.prototype.getFullName('Alex', 'Qin');
        var p = document.getElementById('name');
        p.textContent = fullName;
        $('#name').text(fullName + ' by jquery');
        console.log(fullName);
        return 0;
    };
    Startup.prototype.getFullName = function (firstName, lastName) {
        return firstName + ' ' + lastName;
    };
    return Startup;
}());
Startup.main();
