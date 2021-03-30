'use strict';
let userName= prompt('whats your name?');
console.log(' Hallo ' + userName);
alert(' Hallo ' + userName + ' I am Maryam Najjar');
let score=0;
let age= prompt(' Am i 22 years old? ');
age=age.
toLowerCase();
// console.log(age);
// tolowerCase();
if (age==='yes' || age==='y'){
    // console.log('Ooooh pravoo');
    alert('Ooooh pravoo');
    score++
}
else if (age==='no' || age==='n'){
    // console.log('Nooo Iam 22');
    alert('Nooo I am 22 ');
}
else{
    // console.log('Please only say yes or no');
    alert('Please only say yes or no');
}
let adu= prompt(' Did i study engineering? ');
adu=adu.
toLowerCase();

// console.log(adu);
// tolowerCase();
if (adu==='yes' || adu==='y'){
    // console.log('Ooooh Nooo, Iam studied business economic');
    alert('OOoooh Nooo, I studied business economic');
}
else if (adu==='no' || adu==='n'){
    // console.log('Yess, Iam studied business economic');
    alert('Yes, I studied business economic');
    score++
}
else{
    // console.log('Please only say yes or no');
    alert('Please only say yes or no');
}
let uni= prompt(' Did i study in The University of Jordan? ');
uni=uni.
toLowerCase();

// console.log(uni);
// tolowerCase();
if (uni==='yes' || uni==='y'){
    // console.log('Good job thats right');
    alert('Good job thats right');
    score++
}
else if (uni==='no' || uni==='n'){
    // console.log('NO, I am studied in The University of Jordan, dont worry you can do better ');
    alert('NO, I studied in The University of Jordan, dont worry you can do better');
}
else{
    // console.log('Please only say yes or no');
    alert('Please only say yes or no');
}
let food= prompt('Is the burger my favorite fast food? ');
food=food.
toLowerCase();

// console.log(food);
// tolowerCase();
if (food==='yes' || food==='y'){
    // console.log('Good job thats right, I love burger soo much');
    alert('Good job thats right, I love burger soo much');
    score++
}
else if (food==='no' || food==='n'){
    // console.log('NO, not again, i think burger is most delicious food ');
    alert('NO, not again, i think burger is most delicious food ');
}
else{
    // console.log('Please only say yes or no');
    alert('Please only say yes or no');
}
let night= prompt('Do I Love night more than morning?? ');
night=night.
toLowerCase();

// console.log(night);
// tolowerCase();
if (night==='yes' || night==='y'){
    // console.log('Pravoo, I like the night but i dont like dark circles, Hahahaha');
    alert('Pravoo, I like the night but i dont like dark circles, Hahahaha');
    score++
}
else if (night==='no' || night==='n'){
    // console.log('NO, i know its not healthy but i love the night');
    alert('NO, i know its not healthy but i love the night ');
}
else{
    // console.log('Please only say yes or no');
    alert('Please only say yes or no');
}
// alert('I hope you enjoied with me ' + userName + ' now see more information about me ');
var i=0;
for(let i=0; i<4; i++){
let bir= prompt(' now can you trying to guess my birthday month? ');
if(bir>8 && bir<=10){
    alert(' NO, its smaller than.');
}
else if(bir<8){
    alert('NO, its bigger than.');
}
else{
    alert('Ooh, good job my birthday is in 27/8 ') 
    score++
    break;
}
}
alert(' Are you ready to another gussing game?');
var s=0
for(let s=0; s<6 ; s++){
    let color= prompt('can you tring to know whats my favorite color?');
    color=color.
    toLowerCase();
    if(color!='violet'){
        alert('try again its start with a letter "v"');
        continue;
    }
    else{
        alert('Good job its Violet, Its nice color');
        score++
        break;
    } 
}
if(score=>4){
    alert(` Good job you have ${score} from 7 in this gussing game`);
}
else{
    alert( `Its not bad you git ${score} from 7 in this gussing game, '\n' you can try to paly it again` );
}

alert('I hope you enjoied with me ' + userName + ' now see more information about me ');