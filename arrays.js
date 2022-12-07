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
//true, true, false, true".
healthful.unshift(false);
console.log(healthful);

//calling index position 2, which should result in Honey Bunches, 
//which to our eyes is the third element.
console.log(cereals[2])

//should log "65"
console.log(calories[3])

//should return the value of the first element; note that because I 
//unshifted healthful above, the first element is actually "false".
console.log(healthful[0]);