var cereals = ["Zeroes", "Squares", "Honey Bunches", "Crispies"]
var calories = [50, 75, 120, 65]
var healthful = [true, true, false, true]

//should return "Zeroes", "Squares", "Honey Bunches"
cereals.pop();
console.log(cereals);

//should log [50, 75. 120, 65, 150]
calories.push(150);
console.log(calories);

//should now append at the begining "false", so result will be "false, 
//true, true, false, true"
healthful.unshift(false);
console.log(healthful);