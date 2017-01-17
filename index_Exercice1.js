'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
            'firstName': 'Paul',
            'lastName': 'Bismuth'
            },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
            'deductibleReduction': false
             },
  'price': 0,
  'commission': {
                'insurance': 0,
                'assistance': 0,
                'drivy': 0
                }
},{
  'id': '2-rs-92',
  'driver': {
            'firstName': 'Rebecca',
            'lastName': 'Solanas'
            },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);

//Exercie 1
function dateDiff(d1, d2){
  d1 = d1.getTime() / 86400000;
  d2 = d2.getTime() / 86400000;
  return new Number(d2 - d1 +1).toFixed(0);
}
function PricePerDay(Id){
	for(var i=0;i<cars.length;i++)
	{
		if(cars[i].id == Id)
		{
			return cars[i].pricePerDay;
			break;
		}
	}
}
function PricePerKm(Id){
	for(var i=0;i<cars.length;i++)
	{
		if(cars[i].id == Id)
		{
			return cars[i].pricePerKm;
			break;
		}
	}
}
function PricePerConducteur(rentals){
	
	var j = 0;
	while(j < rentals.length)
	{
		console.log(j);
		
		var beginDate = new Date(rentals[j].pickupDate);
		console.log("Debut de location    " + beginDate);
		
		var returnDate = new Date(rentals[j].returnDate);
		console.log("Fin de location      " + returnDate);
		
		var numberOfDay = dateDiff(beginDate, returnDate);
		console.log("Nombre de jour de location = " + numberOfDay);
		
		var carId = rentals[j].carId;
		console.log("Car ID : " + carId);
		
		var PriceD = PricePerDay(carId)
		console.log("Price/Day : " + PriceD);
		
		var PriceK = PricePerKm(carId);
		console.log("Price/Km : " + PriceK);
		
		var distance = rentals[j].distance;
		console.log("Distance parcouru = " + distance);
		
		var price = (PriceK * distance) + (PriceD * numberOfDay);
		console.log("Prix : " + price);
		
		j += 1;
	}
}



