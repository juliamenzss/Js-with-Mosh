 const person = {
    firtsName: 'Julia',
    lastName: 'Matos',
    get fullName() {
        return `${person.firtsName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firtsName = parts[0];
        this.lastName = parts[1];
    }
 };

 person.fullName = 'Amanda Souza';

 console.log(person);