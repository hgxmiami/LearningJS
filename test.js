var car1 = {make: "Toyota",
            model: "Camry",
            year: 2016,
            color: "Matte Blue",
            price: 38000,
            vin: 123123123
            
           };

var car2 = {make: "Honda",
            model: "Accord",
            year: 1966,
            color: "Pink",
            price: 100,
            vin: 124124124
            
           };

var car3 = {make: "Ford",
            model: "Pinto",
            year: 2016,
            color: "Hue",
            price: 79000,
            vin: 125125125
            
           };

car1["finish"] = "Matte";
car2["finish"] = "Gloss";
car3["finish"] = "Gloss";
car1["finish"] = "Blue";

var myDealership = {
    carPurchase: function(make, model, year, price, color, finish, VIN) {
        myDealership["inventory"].push({make: make,
                                       model: model, 
                                       year: year,
                                       price: price,
                                       color: color,
                                       finish: finish,
                                       VIN: VIN
                                      });
        myDealership.carsOnHand ++;
    },

    carSale: function(vin)  {
        myDealership.carsOnHand --; 
        for(var i = 0; i< myDealership.inventory.length; i++) {
            if(myDealership.inventory[i].vin == vin) {
               myDealership.inventory.splice(i, 1);
            }
        };
        
    },
    inventory: [car1, car2, car3],
    hours: "9am - 4am",
    revenue: 300000,
    carsOnHand: 3,
    
}

var car4 = {make: "Chevrolet",
            model: "Caprice Classic",
            year: "1985",
            price: 200,
            color: "White",
            finish: "Rust",
            VIN: 234652234
           }


