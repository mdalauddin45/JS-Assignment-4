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
    return /\.js$/i.test(string)
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

}

// 5.
/*
{name: 'tom', friend: 'Roke'}
{name: "Roke", friend: "Tom"}


{name: 'Chris', friend: 'John'}
{name: "Raz", friend: "Jonny"}
*/
function isBestFriend() {

}

