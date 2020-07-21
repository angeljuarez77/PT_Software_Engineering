class Car {

  constructor(maker, serialNumber) {
    this.maker = maker;
    this.serialNumber = serialNumber;
  }

  drive() {
    console.log("The car moves");
  }

}

class Factory {
  constructor(company) {
    this.company = company;
    this.cars = [];
  }

  generateCar() {
    const newCar = new Car(this.company, this.cars.length);
    this.cars.push(newCar);
  }

  generateCars(dailyCars) {
    /*
     * I have a function that creates my cars already
     * It is inside of the Factory class
     * I am currently inside of the Factory class
     * this.generateCar();
     *
     * loop -- for -- how many cars we need to make
     * how many times we need to loop through
     * the number of times we loop through is equal to the number given to us in dailyCars
    */
    for(let i = 0; i < dailyCars; i++) {
      this.generateCar();
    }
  }

  howManyCarsInInventory() {
    console.log(this.cars, this.cars.length);
  }
}

const anotherCar = new Car('AnotherCompany', 1234);

const tesla = new Factory('Tesla');
tesla.generateCars(20);
console.log(tesla.cars);

// console.log(tesla);
// console.log(tesla.cars);
// console.log(tesla.cars.length);

// const ford = new Factory('Ford');
// ford.generateCar();
// console.log(ford.cars.length);

// console.log(tesla);
// console.log(ford);
