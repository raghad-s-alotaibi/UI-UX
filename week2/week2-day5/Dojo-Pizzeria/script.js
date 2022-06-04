function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
    }
        
    var p1 = pizzaOven("Thin Crust", "Buffalo Sauce", ["mozzarella"], ["Mushroom", "Onions", "Black olives"]);     
    var p2 = pizzaOven("tuffed Crust", "marinara", ["mozzarella", "Parmigiano Reggiano"], ["Mushrooms", "Olives", "Onions","Jalapeños"]);
    console.log(p1);
    console.log(p2);
    



    function randomPizza(pizzas){
        //working on it
    }