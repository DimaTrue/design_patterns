
class FullTime {
  constructor() {
    this.rate = '$12'
  }
}

class PartTime {
  constructor() {
    this.rate = '$11'
  }
}

class Temporary {
  constructor() {
    this.rate = '$10'
  }
}

class Contractor {
  constructor() {
    this.rate = '$15'
  }
}

class Employee {
  create(type) {
    let employee;
    if(type === 'fulltime') {
      employee = new FullTime();
    } else if (type === 'parttime') {
      employee = new PartTime();
    } else if (type === 'temporary') {
      employee = new Temporary();
    } else if (type === 'contractor') {
      employee = new Contractor();
    }
    employee.type = type;
    employee.say = function() {
      console.log(`${this.type}: rate ${this.rate}/hour`)
    }
    return employee;
  }
}

const factory = new Employee();
fulltime = factory.create('fulltime')
parttime = factory.create('parttime')
temporary = factory.create('temporary')
contractor = factory.create('contractor')

temporary.say()
