var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        // // let fullName = this.prototype.getFullName('Alex', 'Qin');
        // // let p = document.getElementById('name');
        // // p.textContent = fullName;
        // // $('#name').text(fullName + ' by jquery');
        // // console.log(fullName);
        return 0;
    };
    Startup.prototype.getFullName = function (firstName, lastName) {
        return firstName + ' ' + lastName;
    };
    return Startup;
}());
Startup.main();
