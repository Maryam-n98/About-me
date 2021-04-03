'use strict';
let userName = prompt('whats your name?');
alert(' Hallo ' + userName + ' I am Maryam Najjar');
let score = 0;

// Question1

let firstQuesFun = function () {


    let age = prompt(' Am i 22 years old? ');
    age = age.
        toLowerCase();

    if (age === 'yes' || age === 'y') {
        alert('Ooooh pravoo');
        score++
    }
    else if (age === 'no' || age === 'n') {
        alert('Nooo I am 22 ');
    }
    else {
        alert('Please only say yes or no');
    }
};
firstQuesFun();

// Question2

let secondQuesFun = function () {


    let adu = prompt(' Did i study engineering? ');
    adu = adu.
        toLowerCase();
    if (adu === 'yes' || adu === 'y') {
        alert('OOoooh Nooo, I studied business economic');
    }
    else if (adu === 'no' || adu === 'n') {
        alert('Yes, I studied business economic');
        score++
    }
    else {
        alert('Please only say yes or no');
    }
};
secondQuesFun();

// Question3

let thirdQuesFun = function () {


    let uni = prompt(' Did i study in The University of Jordan? ');
    uni = uni.
        toLowerCase();

    if (uni === 'yes' || uni === 'y') {
        alert('Good job thats right');
        score++
    }
    else if (uni === 'no' || uni === 'n') {
        alert('NO, I studied in The University of Jordan, dont worry you can do better');
    }
    else {
        alert('Please only say yes or no');
    }
};
thirdQuesFun();

// Question4

let fourthQuesFun = function () {

    let food = prompt('Is the burger my favorite fast food? ');
    food = food.
        toLowerCase();

    if (food === 'yes' || food === 'y') {
        alert('Good job thats right, I love burger soo much');
        score++
    }
    else if (food === 'no' || food === 'n') {
        alert('NO, not again, i think burger is most delicious food ');
    }
    else {
        alert('Please only say yes or no');
    }
};

fourthQuesFun();

// Question5

let fifthQuesFun = function () {


    let night = prompt('Do I Love night more than morning?? ');
    night = night.
        toLowerCase();
    if (night === 'yes' || night === 'y') {
        alert('Pravoo, I like the night but i dont like dark circles, Hahahaha');
        score++
    }
    else if (night === 'no' || night === 'n') {
        alert('NO, i know its not healthy but i love the night ');
    }
    else {
        alert('Please only say yes or no');
    }
};
fifthQuesFun();


//  Question6
let sixthQuesFun = function () {

    alert('I hope you enjoied with me ' + userName + ' now see more information about me ');
    var i = 0;
    for (let i = 0; i < 4; i++) {
        let bir = prompt(' now can you trying to guess my birthday month? ');
        if (bir > 8 && bir <= 10) {
            alert(' NO, its smaller than.');
        }
        else if (bir < 8) {
            alert('NO, its bigger than.');
        }
        else {
            alert('Ooh, good job my birthday is in 27/8 ')
            score++
            break;
        }
    }
};
sixthQuesFun();


//  Question7

let seventhQuesFun = function () {

let userAnswer = false;
let col = ['iris', 'pink', 'violet' , 'mavue'];
var s=0;
for (let s = 0; s < 6; s++) {
    let color = prompt('can you tring to know whats my favorite color?');
var b;
    for (let b = 0; b < col.length; b++) {


        if (color == col[b]) {
            alert(' good job i love iris , pink, mavue, and violet color');
            userAnswer = true;
              score++;
            break;
        }

    } if (userAnswer == true) {
        break;
    }
    else if (b == 5) {
        alert('good job');
    }
    else if (userAnswer == false) {
        alert('try again');
    }

}
};

seventhQuesFun();


if (score => 4) {
    alert(` Good job you have ${score} from 7 in this gussing game`);
}
else {
    alert(`Its not bad you git ${score} from 7 in this gussing game, '\n' you can try to paly it again`);
}

alert('I hope you enjoied with me ' + userName + ' now see more information about me ');