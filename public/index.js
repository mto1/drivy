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
}, {
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

console.log("---------- INITIALISATION DE LA BASE DE DONNEES ----------");
console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
console.log("---------------- FIN DE L'INITIALISATION -----------------");
console.log("");

console.log("------------------ EXECUTION EXERCICE 1 ------------------");
PricePerConducteur(rentals);
console.log(rentals);
console.log("");

console.log("------------------ EXECUTION EXERCICE 2 ------------------");
NewPricePerConducteur(rentals);
console.log(rentals);
console.log("");

console.log("------------------ EXECUTION EXERCICE 3 ------------------");
Commission(rentals);
console.log(rentals);
console.log("");

console.log("------------------ EXECUTION EXERCICE 4 ------------------");
Franchise(rentals);
console.log(rentals);
console.log("");

console.log("------------------ EXECUTION EXERCICE 5 ------------------");
PayActors(actors);
console.log(actors);
console.log("");

console.log("------------------ EXECUTION EXERCICE 6 ------------------");
RentalsModification(rentals);
console.log("");



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

//Exercice1
function PricePerConducteur(rentals){	
	//console.log("*PricePerConducteur*");
    var j = 0;
    while (j < rentals.length) {
        //console.log(j);

        //console.log("Id : " + rentals[j].id)

        var beginDate = new Date(rentals[j].pickupDate);
        //console.log("Debut de location    " + beginDate);

        var returnDate = new Date(rentals[j].returnDate);
        //console.log("Fin de location      " + returnDate);

        var numberOfDay = dateDiff(beginDate, returnDate);
        //console.log("Nombre de jour de location = " + numberOfDay);

        var carId = rentals[j].carId;
        //console.log("Car ID : " + carId);

        var PriceD = PricePerDay(carId)
        //console.log("Price/Day : " + PriceD);

        var PriceK = PricePerKm(carId);
        //console.log("Price/Km : " + PriceK);

        var distance = rentals[j].distance;
        //console.log("Distance parcouru = " + distance);

        var price = (PriceK * distance) + (PriceD * numberOfDay);
        rentals[j].price = price;
       // console.log("Prix : " + rentals[j].price);
        j += 1;
    }
}
//Exercice2
function NewPricePerConducteur(rentals){
	//console.log("*NewPricePerConducteur*");
    for (var j = 0; j < rentals.length;j++)
    {
        //console.log(j);

        //console.log("Id : " + rentals[j].id)

        var beginDate = new Date(rentals[j].pickupDate);
        //console.log("Debut de location    " + beginDate);

        var returnDate = new Date(rentals[j].returnDate);
        //console.log("Fin de location      " + returnDate);

        var numberOfDay = dateDiff(beginDate, returnDate);
        //console.log("Nombre de jour de location = " + numberOfDay);

        var carId = rentals[j].carId;
        //console.log("Car ID : " + carId);

        var PriceD = PricePerDay(carId)
        //console.log("Price/Day : " + PriceD);

        var PriceK = PricePerKm(carId);
        //console.log("Price/Km : " + PriceK);

        var distance = rentals[j].distance;
        //console.log("Distance parcouru = " + distance);

        var price = (PriceK * distance) + (PriceD * numberOfDay);
        rentals[j].price = price;
        //console.log("Prix : " + price);

        var newprice = 0;
        for(var i = 1; i <= numberOfDay; i++)
        {
            if(i==1) // Premier Jour de location
            {
                newprice += PriceD;
            }
            else if(i>1 && i<5)
            {
                newprice += (PriceD*0.9);
            }
            else if (i > 4 && i < 11)
            {
                newprice += (PriceD * 0.7);
            }
            else if (i > 10)
            {
                newprice += (PriceD * 0.5);
            }
        }
        newprice += (PriceK * distance);
		rentals[j].price = newprice;
		
        //console.log("Prix avec réduction : " + newprice);
		//console.log("Prix avec réduction : " + rentals[j].price);


    }
}
//Exercice3
function Commission(rentals){
    //console.log("*Commission*");
	for (var j = 0; j < rentals.length; j++)
    {
        //console.log(j);
        //console.log("Id : " + rentals[j].id);
        //console.log("Car ID : " + rentals[j].carId);               
        //console.log("Prix : " + rentals[j].price);

        var assurance = rentals[j].price * 0.3 * 0.5
        //console.log("Assurance : " + assurance);
        rentals[j].commission.insurance = assurance;

        var beginDate = new Date(rentals[j].pickupDate);
        var returnDate = new Date(rentals[j].returnDate);
        var numberOfDay = dateDiff(beginDate, returnDate);
        //console.log("Nombre de jour de location = " + numberOfDay);

        var assistance = numberOfDay;
        //console.log("Assistance = " + numberOfDay);
        rentals[j].commission.assistance = assistance;

        var drivy = (rentals[j].price * 0.3) - assurance - assistance;
        //console.log("Drivy = " + drivy);
        rentals[j].commission.drivy = drivy;
    }
}
//Exercice4
function Franchise(rentals){
	//console.log("*Franchise*");
	for (var j = 0; j < rentals.length; j++)
    {
        //console.log(j);
        //console.log("Id : " + rentals[j].id);
		var optionReduction = rentals[j].options.deductibleReduction;
        //console.log("Option : " + optionReduction); 
		var price = rentals[j].price;
        //console.log("Prix : " + price);

		if(optionReduction == true)
		{
			var beginDate = new Date(rentals[j].pickupDate);
			var returnDate = new Date(rentals[j].returnDate);
			var numberOfDay = dateDiff(beginDate, returnDate);
			//console.log("Nombre de jour de location = " + numberOfDay);
			price += (numberOfDay*4)
		}
		rentals[j].price = price
		//console.log("New Prix : " + rentals[j].price)

    }
}
//Exercice5
function PayActors(actors){
	for(var i=0;i<actors.length;i++)
	{
		for(var j=0;j<rentals.length;j++)
		{
			if(actors[i].rentalId == rentals[j].id)
			{
				//console.log(actors[i].rentalId)
				//console.log(rentals[j].id)

				for(var k = 0; k<actors[i].payment.length;k++)
				{
					
					if(actors[i].payment[k].who == "driver")
					{
						//console.log(i);					
						var driver = rentals[j].price;
						//console.log(actors[i].payment[k].who + " " + driver)
						actors[i].payment[k].amount = driver;
					}
					else if(actors[i].payment[k].who == "owner")
					{												
						var owner = (rentals[j].price*0.7);
						//console.log(actors[i].payment[k].who + " " + owner)
						actors[i].payment[k].amount = owner;
					}
					else if(actors[i].payment[k].who == "insurance")
					{												
						var insurance = rentals[j].commission.insurance;
						//console.log(actors[i].payment[k].who + " " + insurance)
						actors[i].payment[k].amount = insurance;
					}
					else if(actors[i].payment[k].who == "assistance")
					{											
						var assistance = rentals[j].commission.assistance;
						//console.log(actors[i].payment[k].who + " " + assistance)
						actors[i].payment[k].amount = assistance;
					}
					else if(actors[i].payment[k].who == "drivy")
					{								
						var optionReduction = rentals[j].options.deductibleReduction;
						var PriceOptionReduction = 0
						if(optionReduction == true)
						{
							var beginDate = new Date(rentals[j].pickupDate);
							var returnDate = new Date(rentals[j].returnDate);
							var numberOfDay = dateDiff(beginDate, returnDate);
							//console.log("Nombre de jour de location = " + numberOfDay);
							var PriceOptionReduction = (numberOfDay*4)
						}
						
						rentals[j].commission.drivy +=  PriceOptionReduction;
						//console.log(actors[i].payment[k].who + " " + rentals[j].commission.drivy);
						actors[i].payment[k].amount = rentals[j].commission.drivy;
					}
					
				}								
				break;
			}
		}
	}	
}
//Exercice6
function RentalsModification(rentals){
	var OldPrice=[];
	for(var i=0;i<rentals.length;i++)
	{
		for(var j=0;j<rentalModifications.length;j++)
		{
			if(actors[i].rentalId == rentalModifications[j].rentalId)
			{				
				//console.log(actors[i].rentalId)
				var Id = rentalModifications[j].rentalId;
				for(var k = 0; k<actors[i].payment.length;k++)
				{					
					if(actors[i].payment[k].who == "driver")
					{
						var OldPriceDriver = actors[i].payment[k].amount
						//console.log("OldPriceDriver " + OldPriceDriver)
					}
					else if(actors[i].payment[k].who == "owner")
					{
						var OldPriceOwner = actors[i].payment[k].amount
						//console.log("OldPriceowner "+OldPriceOwner)
					}					
					else if(actors[i].payment[k].who == "insurance")
					{
						var OldPriceInsurance = actors[i].payment[k].amount
						//console.log("OldPriceinsurance "+OldPriceInsurance)
					}
					else if(actors[i].payment[k].who == "assistance")
					{
						var OldPriceAssistance = actors[i].payment[k].amount
						//console.log("OldPriceAssist "+ OldPriceAssistance)
					}
					else if(actors[i].payment[k].who == "drivy")
					{
						var OldPriceDrivy = actors[i].payment[k].amount
						//console.log("OldPriceDrivy " +OldPriceDrivy)
					}					
				}
				OldPrice[j]={Id, OldPriceDriver, OldPriceOwner, OldPriceInsurance, OldPriceAssistance, OldPriceDrivy}
				//console.log(OldPrice[j]);
			}
		
			
			if(rentals[i].id == rentalModifications[j].rentalId)
			{
				//console.log(j);
				//console.log("Vieux Prix "+ rentals[i].price)				
				//console.log(rentals[i].distance)
				//console.log(rentalModifications[j].distance)				
				if( rentalModifications[j].distance != undefined)
				{
					rentals[i].distance = rentalModifications[j].distance;
				}
				//console.log(rentals[i].distance + " " + rentalModifications[j].distance)
				
				//console.log(rentals[i].pickupDate)
				//console.log(rentalModifications[j].pickupDate)
				if( rentalModifications[j].pickupDate != undefined)
				{
					rentals[i].pickupDate = rentalModifications[j].pickupDate;
				}			
				//console.log(rentals[i].pickupDate + " " + rentalModifications[j].pickupDate)
				
				//console.log(rentals[i].returnDate)
				//console.log(rentalModifications[j].returnDate)
				if(rentalModifications[j].returnDate != undefined)
				{
					rentals[i].returnDate = rentalModifications[j].returnDate;
				}
				//console.log(rentals[i].returnDate + " " +  rentalModifications[j].returnDate);		
				
				break;
			}
		}
	}
	
	//console.log("-------------- Mise à Jour ------------------")
	PricePerConducteur(rentals);
	NewPricePerConducteur(rentals);
	Commission(rentals);
	Franchise(rentals);
	PayActors(actors);
	//console.log("--------------Affichage de la Mise à Jour ------------------")
	var NewPrice=[];
	for(var i=0;i<rentals.length;i++)
	{
		for(var j=0;j<rentalModifications.length;j++)
		{
			if(actors[i].rentalId == rentalModifications[j].rentalId)
			{				
				for(var k = 0; k<actors[i].payment.length;k++)
				{
					if(actors[i].payment[k].who == "driver")
					{
						var NewPriceDriver = actors[i].payment[k].amount
						//console.log("NewPriceDriver " + NewPriceDriver)
					}
					else if(actors[i].payment[k].who == "owner")
					{
						var NewPriceOwner = actors[i].payment[k].amount
						//console.log("NewPriceowner "+NewPriceOwner)
					}					
					else if(actors[i].payment[k].who == "insurance")
					{
						var NewPriceInsurance = actors[i].payment[k].amount
						//console.log("NewPriceinsurance "+NewPriceInsurance)
					}
					else if(actors[i].payment[k].who == "assistance")
					{
						var NewPriceAssistance = actors[i].payment[k].amount
						//console.log("NewPriceAssist "+ NewPriceAssistance)
					}
					else if(actors[i].payment[k].who == "drivy")
					{
						var NewPriceDrivy = actors[i].payment[k].amount
						//console.log("NewPriceDrivy " +NewPriceDrivy)
					}
					
				}
				var Id = actors[i].rentalId;
				NewPrice[j]={Id, NewPriceDriver, NewPriceOwner, NewPriceInsurance, NewPriceAssistance, NewPriceDrivy}
				//console.log(NewPrice[j]);
				//console.log(OldPrice.length);
			}
	
		}
	}
	var DiffPrice = [];
	for( var x = 0; x<OldPrice.length;x++)
	{
		
		var DiffPriceDriver = NewPrice[x].NewPriceDriver - OldPrice[x].OldPriceDriver;
		//console.log(DiffPriceDriver);
		var DiffPriceOwner = NewPrice[x].NewPriceOwner - OldPrice[x].OldPriceOwner; 
		//console.log(DiffPriceOwner);
		var DiffPriceInsurance = NewPrice[x].NewPriceInsurance - OldPrice[x].OldPriceInsurance; 
		//console.log(DiffPriceInsurance);
		var DiffPriceAssistance = NewPrice[x].NewPriceAssistance - OldPrice[x].OldPriceAssistance; 
		//console.log(DiffPriceAssistance);
		var DiffPriceDrivy = NewPrice[x].NewPriceDrivy - OldPrice[x].OldPriceDrivy; 
		//console.log(DiffPriceDrivy);
		var ID = NewPrice[x].Id;
		console.log("Voici ce qu'il reste a payer/rembourser apres modification de la reservation " + ID);
		DiffPrice[x] = {ID, DiffPriceDriver, DiffPriceOwner, DiffPriceInsurance, DiffPriceAssistance, DiffPriceDrivy};
		console.log(DiffPrice[x]);
	}
}

















