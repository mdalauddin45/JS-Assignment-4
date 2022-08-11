//1. Problem-01 : radian to degree
function radianToDegree(radian) {
    const pi = Math.PI;
    const degree = radian * (180 / pi);
    return degree.toFixed(2);
}
console.log(radianToDegree(10));
console.log(radianToDegree(25));
console.log(radianToDegree(199));

// 2. check whether the given file name is a javaScript file or not

function isJavaScriptFile(string) {
    let extention = string.substr(string.lastIndexOf('.') + 1);
    if (extention == 'js') {
        return true;
    }
    else {
        return false;
    }
}


console.log(isJavaScriptFile("app.js")) // true;
console.log(isJavaScriptFile("js.png"))    // false;
console.log(isJavaScriptFile("image.js.png"))  // false;
console.log(isJavaScriptFile("image.png.js"))   // true;

//3. calculate the total oil price that I have to pay
/*
disel----> 114
patrol---> 130
octane----> 135
*/
function oilPrice(dieselQuantity, patrolQuantity, octaneQuantity) {
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
console.log(oilPrice(1, 1, 1));
console.log(oilPrice(30, 20, 10));
console.log(oilPrice(1, 0, 2));
console.log(oilPrice(0, 2, 3));


//4.
/*
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
    const reservedBus = people % 50;
    const microBus = reservedBus % 11;
    const publicBus = microBus * 250;
    return publicBus;
}
console.log(publicBusFare(50));
console.log(publicBusFare(55));
console.log(publicBusFare(112));
console.log(publicBusFare(235));
console.log(publicBusFare(365));

// 5.
/*

  { name: "abul", friendName: "babul" },
  { name: "babul", friendName: "abul" }

  { name: "abul", friendName: "kabul" },
  { name: "kabul", friendName: "sabul" }

  { name: "doe", friendName: "alex" },
  { name: "john", friendName: "doe" }


*/

function isBestFriend(friend1, friend2) {
    if (friend1.name && friend1.friend && friend2.name && friend2.friend) {
        if (friend1.name.toUpperCase() === friend2.friend.toUpperCase() && friend2.name.toUpperCase() === friend1.friend.toUpperCase()) {
            return true; //ouput
        }
        else {
            return false; //ouput
        }
    }

    else {
        return 'friend or name key is missing';
    }
}
const bestFriend1 = { name: "abul", friend: "babul" }
const bestFriend2 = { name: "babul", friend: "abul" }
console.log(isBestFriend(bestFriend1, bestFriend2));