class Car {
  model
  manufacturedYear
  mileage

  constructor(mod, year, mil) {
    this.model = mod
    this.manufacturedYear = year
    this.mileage = mil
  }

  drive() {
    console.log('driving')
  }

  selfDrive() {
    console.log('self driving car')
  }

  autoPark() {
    console.log('Auto parking mode started')
  }
}

const car = new Car('BMW', 2020, 1000)
// console.log(car.model, car.manufacturedYear, car.mileage)

car.selfDrive()

// const car2 = new Car('Mercedes', 2022, 100);
// console.log(car2.model, car2.manufacturedYear, car2.mileage);

const anotherCar = {
  model: 'BMW',
  manufacturedYear: 2020,
  mileage: 1000,
  
  selfDrive: () => {
    console.log('self driving car')
  }
}

anotherCar.selfDrive()
