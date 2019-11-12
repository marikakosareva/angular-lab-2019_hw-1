enum Prices {
    SMALLHAMBURGER = 50,
    BIGHAMBURGER = 100,
    CHEESE = 10,
    SALAD = 20,
    POTATO = 15,
    TZEZAR = 100,
    OLIVIE = 50,
    COLA = 50,
    COFFEE = 80
}
  
enum Calories {
    SMALLHAMBURGER = 20,
    BIGHAMBURGER = 40,
    CHEESE = 20,
    SALAD = 5,
    POTATO = 10,
    TZEZAR = 20,
    OLIVIE = 80,
    COLA = 40,
    COFFEE = 20
}


class Product {

    private price: number;
    private calories: number;

    constructor(price, calories) {
        this.price = price;
        this.calories = calories;
    }

    setPrice(price: number){
        this.price = price;
    }

    setCalories(calories: number){
        this.calories = calories;
    }

    getPrice(){
        return this.price;
    }

    getCalories(){
        return this.calories;
    }

}

class Engredient extends Product{
    constructor(type: string) {
        if (type === 'cheese'){
            super(Prices.CHEESE, Calories.CHEESE);
        } else if (type === 'salad'){
            super(Prices.SALAD, Calories.SALAD);
        } else if (type === 'potato'){
            super(Prices.POTATO, Calories.POTATO);
        }
    }
} 

class Hamburger extends Product{

    extras: Engredient[];

    constructor(size: string) {
        if (size === 'big'){
            super(Prices.BIGHAMBURGER, Calories.BIGHAMBURGER);
        } else if (size === 'small'){
            super(Prices.SMALLHAMBURGER, Calories.SMALLHAMBURGER);
        } 
        this.extras = [];
    }

    addEngredient(engredient: Engredient): Hamburger{
        this.extras.push(engredient);
        this.setPrice(this.getPrice() + engredient.getPrice());
        this.setCalories(this.getCalories() + engredient.getCalories());
        return this;
    }

} 

class SaladDish extends Product{ 
    constructor(type: string) {
        if (type === 'oliv'){
            super(Prices.OLIVIE, Calories.OLIVIE);
        } else if (type === 'tzez'){
            super(Prices.TZEZAR, Calories.TZEZAR);
        } 
    }
} 

class Beverage extends Product{ 
    constructor(type: string) {
        if (type === 'cola'){
            super(Prices.COLA, Calories.COLA);
        } else if (type === 'coffee'){
            super(Prices.COFFEE, Calories.COFFEE);
        } 
    }
} 

class Order {
    private isPaid: boolean;
    private orderList: Product[];
    
    constructor(){
        this.isPaid = false;
        this.orderList = [];
    }

    addToOrder(product:Product): Order {  
        if (!this.isPaid) {
            this.orderList.push(product);
            console.log("Product is added!");
        } else {
            console.log("You can't add product to the order. It's already paid!");
        }
        return this;
    }

    removeFromOrder(index: number): void {  
        if (!this.isPaid) {
            this.orderList.splice(index, 1);
            console.log("Product is removed!");
        } else {
            console.log("You can't remove product from the order. It's already paid!");
        }
    }

    getPrice(): number{
        let sum = this.orderList.reduce((sum, item) => {
            return sum + item.getPrice();
        }, 0);
        console.log(`The order costs ${sum}.`)
        return sum;
    }

    getCalories(): number{
        let sum = this.orderList.reduce((sum, item) => {
            return sum + item.getCalories();
        }, 0);
        console.log(`The order contains ${sum} calories.`)
        return sum;
    }
    
    pay(): void{
        
        if (this.isPaid) {
            console.log("This oreder is already paid!");
            return;
        }

        this.isPaid = !this.isPaid;
        console.log("This oreder is paid!");
    }
}

// create new order, get price and calories and pay
let order1 = new Order();
let hamburger1 = new Hamburger('big');
let salat1 = new SaladDish('oliv');
let beverage1 = new Beverage('cola');
order1
    .addToOrder(hamburger1)
    .addToOrder(salat1)
    .addToOrder(beverage1);
order1.getPrice();
order1.getCalories();
order1.pay();

//create new order, remove beverage from order, pay, try to add new beverage
let order2 = new Order();
let hamburger2 = new Hamburger('small');
let salat2 = new SaladDish('tzez');
let beverage2 = new Beverage('coffee');
order2
    .addToOrder(hamburger2)
    .addToOrder(salat2)
    .addToOrder(beverage2);
order2.getPrice();
order2.getCalories();
order2.removeFromOrder(2);
order2.getPrice();
order2.getCalories();
order2.pay();
let beverage2_ = new Beverage('cola');
order2.addToOrder(beverage2_);

// create order with a hamburder with extra engredients, get price and calories
let order3 = new Order();
let hamburger3 = new Hamburger('small');
let engredient1 = new Engredient('cheese');
let engredient2 = new Engredient('potato');
let beverage3 = new Beverage('coffee');
hamburger3
    .addEngredient(engredient1)
    .addEngredient(engredient2);
order3
    .addToOrder(hamburger3)
    .addToOrder(beverage3);
order3.getPrice();
order3.getCalories();