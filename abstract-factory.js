class WoodenDoor {
  getDescription() {
      console.log('I am a wooden door')
  }
}

class IronDoor {
  getDescription() {
      console.log('I am an iron door')
  }
}

class Welder {
  getDescription() {
      console.log('I can only fit iron doors')
  }
}

class Carpenter {
  getDescription() {
      console.log('I can only fit wooden doors')
  }
}

// Деревянная фабрика возвращает плотника и деревянную дверь
class WoodenDoorFactory {
  makeDoor(){
      return new WoodenDoor()
  }

  makeFittingExpert() {
      return new Carpenter()
  }
}

// Железная фабрика возвращает сварщика и железную дверь
class IronDoorFactory {
  makeDoor(){
      return new IronDoor()
  }

  makeFittingExpert() {
      return new Welder()
  }
}

woodenFactory = new WoodenDoorFactory()

door = woodenFactory.makeDoor()
expert = woodenFactory.makeFittingExpert()

door.getDescription()  // I am a wooden door
expert.getDescription() // I can only fit wooden doors

ironFactory = new IronDoorFactory()

door = ironFactory.makeDoor()
expert = ironFactory.makeFittingExpert()

door.getDescription()  // I am an iron door
expert.getDescription() // I can only fit iron doors
