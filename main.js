var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Prices;
(function (Prices) {
    Prices[Prices["SMALLHAMBURGER"] = 50] = "SMALLHAMBURGER";
    Prices[Prices["BIGHAMBURGER"] = 100] = "BIGHAMBURGER";
    Prices[Prices["CHEESE"] = 10] = "CHEESE";
    Prices[Prices["SALAD"] = 20] = "SALAD";
    Prices[Prices["POTATO"] = 15] = "POTATO";
    Prices[Prices["TZEZAR"] = 100] = "TZEZAR";
    Prices[Prices["OLIVIE"] = 50] = "OLIVIE";
    Prices[Prices["COLA"] = 50] = "COLA";
    Prices[Prices["COFFEE"] = 80] = "COFFEE";
})(Prices || (Prices = {}));
var Calories;
(function (Calories) {
    Calories[Calories["SMALLHAMBURGER"] = 20] = "SMALLHAMBURGER";
    Calories[Calories["BIGHAMBURGER"] = 40] = "BIGHAMBURGER";
    Calories[Calories["CHEESE"] = 20] = "CHEESE";
    Calories[Calories["SALAD"] = 5] = "SALAD";
    Calories[Calories["POTATO"] = 10] = "POTATO";
    Calories[Calories["TZEZAR"] = 20] = "TZEZAR";
    Calories[Calories["OLIVIE"] = 80] = "OLIVIE";
    Calories[Calories["COLA"] = 40] = "COLA";
    Calories[Calories["COFFEE"] = 20] = "COFFEE";
})(Calories || (Calories = {}));
var Product = /** @class */ (function () {
    function Product(price, calories) {
        this.price = price;
        this.calories = calories;
    }
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    Product.prototype.setCalories = function (calories) {
        this.calories = calories;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getCalories = function () {
        return this.calories;
    };
    return Product;
}());
var Engredient = /** @class */ (function (_super) {
    __extends(Engredient, _super);
    function Engredient(type) {
        var _this = this;
        if (type === 'cheese') {
            _this = _super.call(this, Prices.CHEESE, Calories.CHEESE) || this;
        }
        else if (type === 'salad') {
            _this = _super.call(this, Prices.SALAD, Calories.SALAD) || this;
        }
        else if (type === 'potato') {
            _this = _super.call(this, Prices.POTATO, Calories.POTATO) || this;
        }
        return _this;
    }
    return Engredient;
}(Product));
var Hamburger = /** @class */ (function (_super) {
    __extends(Hamburger, _super);
    function Hamburger(size) {
        var _this = this;
        if (size === 'big') {
            _this = _super.call(this, Prices.BIGHAMBURGER, Calories.BIGHAMBURGER) || this;
        }
        else if (size === 'small') {
            _this = _super.call(this, Prices.SMALLHAMBURGER, Calories.SMALLHAMBURGER) || this;
        }
        _this.extras = [];
        return _this;
    }
    Hamburger.prototype.addEngredient = function (engredient) {
        this.extras.push(engredient);
        this.setPrice(this.getPrice() + engredient.getPrice());
        this.setCalories(this.getCalories() + engredient.getCalories());
        return this;
    };
    return Hamburger;
}(Product));
var SaladDish = /** @class */ (function (_super) {
    __extends(SaladDish, _super);
    function SaladDish(type) {
        var _this = this;
        if (type === 'oliv') {
            _this = _super.call(this, Prices.OLIVIE, Calories.OLIVIE) || this;
        }
        else if (type === 'tzez') {
            _this = _super.call(this, Prices.TZEZAR, Calories.TZEZAR) || this;
        }
        return _this;
    }
    return SaladDish;
}(Product));
var Beverage = /** @class */ (function (_super) {
    __extends(Beverage, _super);
    function Beverage(type) {
        var _this = this;
        if (type === 'cola') {
            _this = _super.call(this, Prices.COLA, Calories.COLA) || this;
        }
        else if (type === 'coffee') {
            _this = _super.call(this, Prices.COFFEE, Calories.COFFEE) || this;
        }
        return _this;
    }
    return Beverage;
}(Product));
var Order = /** @class */ (function () {
    function Order() {
        this.isPaid = false;
        this.orderList = [];
    }
    Order.prototype.addToOrder = function (product) {
        if (!this.isPaid) {
            this.orderList.push(product);
            console.log("Product is added!");
        }
        else {
            console.log("You can't add product to the order. It's already paid!");
        }
        return this;
    };
    Order.prototype.removeFromOrder = function (index) {
        if (!this.isPaid) {
            this.orderList.splice(index, 1);
            console.log("Product is removed!");
        }
        else {
            console.log("You can't remove product from the order. It's already paid!");
        }
    };
    Order.prototype.getPrice = function () {
        var sum = this.orderList.reduce(function (sum, item) {
            return sum + item.getPrice();
        }, 0);
        console.log("The order costs " + sum + ".");
        return sum;
    };
    Order.prototype.getCalories = function () {
        var sum = this.orderList.reduce(function (sum, item) {
            return sum + item.getCalories();
        }, 0);
        console.log("The order contains " + sum + " calories.");
        return sum;
    };
    Order.prototype.pay = function () {
        if (this.isPaid) {
            console.log("This oreder is already paid!");
            return;
        }
        this.isPaid = !this.isPaid;
        console.log("This oreder is paid!");
    };
    return Order;
}());
// create new order, get price and calories and pay
var order1 = new Order();
var hamburger1 = new Hamburger('big');
var salat1 = new SaladDish('oliv');
var beverage1 = new Beverage('cola');
order1
    .addToOrder(hamburger1)
    .addToOrder(salat1)
    .addToOrder(beverage1);
order1.getPrice();
order1.getCalories();
order1.pay();
//create new order, remove beverage from order, pay, try to add new beverage
var order2 = new Order();
var hamburger2 = new Hamburger('small');
var salat2 = new SaladDish('tzez');
var beverage2 = new Beverage('coffee');
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
var beverage2_ = new Beverage('cola');
order2.addToOrder(beverage2_);
// create order with a hamburder with extra engredients, get price and calories
var order3 = new Order();
var hamburger3 = new Hamburger('small');
var engredient1 = new Engredient('cheese');
var engredient2 = new Engredient('potato');
var beverage3 = new Beverage('coffee');
hamburger3
    .addEngredient(engredient1)
    .addEngredient(engredient2);
order3
    .addToOrder(hamburger3)
    .addToOrder(beverage3);
order3.getPrice();
order3.getCalories();
