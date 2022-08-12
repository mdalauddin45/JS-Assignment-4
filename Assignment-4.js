/*
 Problem-01 : radian to degree
*/

function radianToDegree(radian) {
    if (typeof radian !== "number") {
        return "please enter a number";
    }
    const pi = Math.PI;
    const degree = radian * (180 / pi);
    return degree.toFixed(2);
}
// const result = radianToDegree(1);
// console.log(result);


/*
 Problem-02. check whether the given file name is a javaScript file or not
*/


function isJavaScriptFile(fileName) {
    if (typeof fileName !== "string") {
        return "please  provide a valid input";
    }
    let extention = fileName.substr(fileName.lastIndexOf('.') + 1);
    if (extention == 'js') {
        return true;
    }
    else {
        return false;
    }
}
// const result = isJavaScriptFile("fileNamep.js");
// console.log(result);


/*
Problem-03. calculate the total oil price that I have to pay

disel----> 114
patrol---> 130
octane----> 135
*/


function oilPrice(dieselQuantity, patrolQuantity, octaneQuantity) {
    if (typeof dieselQuantity !== "number" || typeof patrolQuantity !== "number" || typeof octaneQuantity !== "number") {
        return "please provide a valid input";
    }
    let dieselPrice = 114;
    let patrolPrice = 130;
    let octanePrice = 135;

    // Diesel 
    const totalDieselPrice = dieselPrice * dieselQuantity;
    const diesel = totalDieselPrice;

    // Patrol
    const totalPatrolPrice = patrolPrice * patrolQuantity;
    const patrol = totalPatrolPrice;

    // Octan
    const totalOctanePrice = octanePrice * octaneQuantity;
    const octane = totalOctanePrice;

    //Total price
    const totalOilPrice = patrol + diesel + octane;
    return totalOilPrice;
}
// const result = oilPrice(1, 1, 1);
// console.log(result);


/*
Problem-04:

reserved bus ---> 50
micro bus ------> 11
rest prople will go by public bus
people : 65
bus remaining---> 15
microbus -------> 4
public bus------> 4
public bus fare-> 250
*/


function publicBusFare(people) {
    if (typeof people !== "number") {
        return "please enter a number";
    }
    const reservedBus = people % 50;
    const microBus = reservedBus % 11;
    const publicBus = microBus * 250;
    return publicBus;
}
// const result = publicBusFare(50);
// console.log(result);


/*
Problem-05:

  { name: "abul", friendName: "babul" },
  { name: "babul", friendName: "abul" }

  { name: "abul", friendName: "kabul" },
  { name: "kabul", friendName: "sabul" }

  { name: "doe", friendName: "alex" },
  { name: "john", friendName: "doe" }
*/


function isBestFriend(friend1, friend2) {
    if (typeof friend1 !== "object" || typeof friend2 !== "object") {
        return "please provide a valid input";
    }
    if (friend1.name && friend1.friend && friend2.name && friend2.friend) {
        if (friend1.name.toUpperCase() === friend2.friend.toUpperCase() && friend2.name.toUpperCase() === friend1.friend.toUpperCase()) {
            return true;
        }
        else {
            return false;
        }
    }

    else {
        return 'They are not bestfriend';
    }
}
// const bestFriend1 = { name: "abul", friend: "babul" }
// const bestFriend2 = { name: "babul", friend: "abul" }
// console.log(isBestFriend(bestFriend1, bestFriend2));