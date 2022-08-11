/*
{name: 'tom', friend: 'Roke'}
{name: "Roke", friend: "Tom"}


{name: 'Chris', friend: 'John'}
{name: "Raz", friend: "Jonny"}

function isBestFriend(friend1, friend2) {
    const friends = [{ name: 'Chris', friend: 'John' },
    { name: "Raz", friend: "Jonny" }]
    // console.log(remainder);
    if (friends == friend1, friend2) {
        return true;
    }
    else {
        return false;
    }
}
const myNumber = isBestFriend('Chris');
console.log(myNumber);



// const jim = 84;
// const dela = 75;
// if (jim > dela) {
//     console.log('true');
//     return true;
// }
// else {
//     console.log('dela will get the cake');

// }

function isBestFriend(firstFriend, SecondFriend) {
    const friend = [{ name: 'tom', friend: 'Roke' },
    { name: "Roke", friend: "Tom" }]
}

isBestFriend('abul', 'babul')
*/

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
