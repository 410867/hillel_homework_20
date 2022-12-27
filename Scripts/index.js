/**
 * @param {string} name
 * @param {number} age
 * @constructor
 * @property {string} name
 * @property {number} age
 */
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.outputNameAndAge = function () {
        console.log(`Ім'я людини: ${this.name}.\nВік людини: ${this.age}.`);
    }
}
/**
 * @param {string} brand
 * @param {string} model
 * @param {number} graduationYear
 * @param {string} licensePlate
 * @constructor
 * @property {string} brand
 * @property {string} model
 * @property {number} graduationYear
 * @property {string} licensePlate
 */
function Car(brand, model, graduationYear, licensePlate) {
    this.brand = brand;
    this.model = model;
    this.graduationYear = graduationYear;
    this.licensePlate = licensePlate;
    this.owner = {};
    /**
     * @param {Person} owner
     */
    this.ownerAssignment = function(owner) {
        if(owner instanceof Person) {
            if (owner.age >= 18) {
                this.owner = owner;
            } else {
                console.log(`Не можливо присвоїти власника автомобілю, тому що ${owner.name} менше 18 років.`);
            }
        } else {
            console.log('У цього авто вже є власник.');
        }
    }

    this.informationCar = function() {
        console.log(`Марка автомобіля: ${this.brand};\nМодель автомобіля: ${this.model};`
            + `\nРік випуску: ${this.graduationYear};\nНомерний знак: ${this.licensePlate};`);
        if (this.owner.hasOwnProperty('name')) {
            this.owner.outputNameAndAge();
        } else {
            console.log('Цей автомобіль не має власника.');
        }
    }
}

const max = new Person('Max', 20);
const bohdan = new Person('Bohdan', 25);
const denys = new Person('Denys', 16);
const audi = new Car('Audi', ' a4 1,9 Tdi', 2004, 'AB 3514 AC');
const bmw = new Car('BMW', 'X5W', 2008, 'L SU 8492');
const tesla = new Car('Tesla', 'S PLAID', 2022, 'CH 753 K');

max.outputNameAndAge();
bohdan.outputNameAndAge();
denys.outputNameAndAge();

audi.ownerAssignment(max);
tesla.ownerAssignment(denys);
bmw.ownerAssignment(bohdan);

audi.informationCar();
tesla.informationCar();
bmw.informationCar();
