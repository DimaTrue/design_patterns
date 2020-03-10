/**
 *
 * ПАТТЕРН СТРОИТЕЛЬ (builder (композиционный конструктор обьекта))
 *
 * Паттерн СТРОИТЕЛЬ - это порождающий паттерн проектирования, который позволяет создавать сложные объекты пошагово.
 * Строитель даёт возможность использовать один и тот же код строительства для получения разных представлений объектов.
 * Применение: Паттерн Строитель нужен, если объект может существовать в разных вариациях или процесс
 * инстанцирования состоит из нескольких шагов.
 * В этом случае есть три варианта:
 * - огромный конструктор(фабрика) со множеством if/else в котором легко запуться и который тяжело понять
 * - плодить кучу подклассов для всех вариантов (это наверное еще хуже первого варианта)
 * - паттерн строитель (предлагает разбить процесс конструирования объекта на отдельные шаги (например, построитьСтены,
 * вставитьДвери и другие). Чтобы создать объект, вам нужно поочерёдно вызывать методы строителя. Строителей может быть
 * несколько разных вариантов, но у них общий интерфейс.)
 */

class abstract_Products { // абстрактный класс продуктов
  constructor(builder) {
      this.size = builder.size
      this.cheeze = builder.cheeze || false
      this.pepperoni = builder.pepperoni || false
      this.lettuce = builder.lettuce || false
      this.tomato = builder.tomato || false
  }
}

//конкретные продукты
class Burger extends abstract_Products {
  constructor(builder) {
      super(builder);
      this.breadType = builder.breadType;
      this.meatType = builder.meatType;
  }
}

class Pizza extends abstract_Products {
  constructor(builder) {
      super(builder);
      this.doughType = builder.doughType;
  }
}



class ProductBuilder { // абстрактный класс строителя. Методы м.б. как асбтрактными, так и описанными.
  constructor(size) {
      this.size = size
  }

  addPepperoni() {
      this.pepperoni = true
      return this
  }

  addLettuce() {
      this.lettuce = true
      return this
  }

  addCheeze() {
      this.cheeze = true
      return this
  }

  addTomato() {
      this.tomato = true
      return this
  }

  getProduct() { // этот метод абстрактный, т.к. всегда разный
      throw new Error(`В ${this.constructor.name} не описан метод getProduct()`)
  }
}

class BurgerBuilder extends ProductBuilder {
  constructor(size) {
      super(size);
  }

  setBreadType (bread) {
      this.breadType = bread
      return this
  }
  setMeatType (meat) {
      this.meatType = meat
      return this
  }
  getProduct() {
      if (!this.breadType) {
          throw new Error(`${this.constructor.name} получил некорректное значение breadType`)
      } else if (!this.meatType) {
          throw new Error(`${this.constructor.name} получил некорректное значение meatType`)
      }
      return new Burger(this)
  }
}

class PizzaBuilder extends ProductBuilder {
  constructor(size) {
      super(size);
  }

  setDoughType (doughType) {
      this.doughType = doughType;
      return this
  }

  getProduct() {
      if (!this.doughType) {
          throw new Error(`${this.constructor.name} получил некорректное значение doughType`)
      }
      return new Pizza(this)
  }
}


// Клиентский код. При необходимости можно его поместить в отдельный класс - Director
const burger = (new BurgerBuilder(14))
  .addPepperoni()
  .addLettuce()
  .addTomato()
  .setBreadType('black')
  .setMeatType('chicken')
  .getProduct()

console.log(burger);

const pizza = (new PizzaBuilder(32))
  .addPepperoni()
  .addCheeze()
  .addLettuce()
  .addTomato()
  .setDoughType('slim')
  .getProduct()

console.log(pizza);

const slimBurger = (new BurgerBuilder(14)) // делаем еще один бургер, но чтобы результат был другим
  .setBreadType('white')
  .setMeatType('beef')
  .getProduct()

console.log(slimBurger);
