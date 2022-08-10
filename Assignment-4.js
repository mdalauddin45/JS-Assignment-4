//1. Problem-01 : radian to degree

function radianToDegree(radian) {
    const pi = 3.1416;
    const digree = radian * (180 / pi);
    return digree.toFixed(2);
}
console.log(radianToDegree(1));

// 2. check whether the given file name is a javaScript file or not
function isJavaScriptFile(string) {
    if (string.match(/(\w*)\.js$/) == 0) {
        console.log('false');
        return false;
    }
    else {
        console.log('true');
        return true;
    }
}

isJavaScriptFile('index.js');

//3. calculate the total oil price that I have to pay
/*
disel----> 114
patrol---> 130
octane----> 135
*/
function oilPrice(diselQuantity, patrolQuantity, octaneQuantity) {
    let diselPrice = 114;
    let patrolPrice = 130;
    let octanePrice = 135;

    // Disel 
    const totalDiselPrice = diselPrice * diselQuantity;
    const disel = totalDiselPrice;
    console.log(disel);

    // Patrol
    const totalPatrolPrice = patrolPrice * patrolQuantity;
    const patrol = totalPatrolPrice;
    console.log(patrol);

    // Octan
    const totalOctanePrice = octanePrice * octaneQuantity;
    const octane = totalOctanePrice;
    console.log(octane);

    //Total price
    const totalOilPrice = patrol + disel + octane;
    console.log(totalOilPrice);

}
oilPrice(2, 4, 1);

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

