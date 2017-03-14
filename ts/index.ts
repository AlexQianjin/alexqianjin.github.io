class Startup {
    public static main(): number {
        // // let fullName = this.prototype.getFullName('Alex', 'Qin');
        // // let p = document.getElementById('name');
        // // p.textContent = fullName;
        // // $('#name').text(fullName + ' by jquery');
        // // console.log(fullName);
        return 0;
    }

    getFullName(firstName: string, lastName: string){
        return firstName + ' ' + lastName;
    }
}

Startup.main();