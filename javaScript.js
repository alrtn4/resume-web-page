"use strict"

//fader code

let pic = document.querySelectorAll('#fader img');
let button = document.querySelectorAll('.circle');
let rButton = document.querySelector('#right');
let lButton = document.querySelector('#left');
let fadeNumber , opacNumber;

let intervalTag = setInterval(change , 5000);

function change(){
    fade();
    opac();
}

fadeNumber = 0;

function fade(){
    fadeNumber--;
    if(fadeNumber < 0){
        fadeNumber = 3;
    }
    pic[fadeNumber].style.opacity = '0';
    screenCheckSmallCircle(fadeNumber);
}

opacNumber = 3;

function opac(){
    opacNumber--;
    if(opacNumber < 0){
        opacNumber = 3;
    }
    pic[opacNumber].style.opacity = '1';
    screenCheckBigCircle(opacNumber);
}

function screenCheckBigCircle(number){
    if(Number(window.screen.width) >= 960){
        bigCircle1140(number);
    }else if(Number(window.screen.width) < 960){
        bigCircle360(number);
    }
}

function screenCheckSmallCircle(number){
    if(Number(window.screen.width) >= 960){
        smallCircle1140(number);
    }else if(Number(window.screen.width) < 960){
        smallCircle360(number);
    }
}

function bigCircle360(number){
    button[number].style.width = '7px';
    button[number].style.height = '7px';
    button[number].style.borderRadius = '4px';
    button[number].style.backgroundColor = 'rgb(250, 3, 3)';
    button[number].style.top = '106px';
    if(number == 3){
        button[number].style.left = '141px';
    }
    if(number == 2){
        button[number].style.left = '151px';
    }
    if(number == 1){
        button[number].style.left = '161px';
    }
    if(number == 0){
        button[number].style.left = '171px';
    }
}

function smallCircle360(number){
    button[number].style.width = '5px';
    button[number].style.height = '5px';
    button[number].style.borderRadius = '3px';
    button[number].style.backgroundColor = 'white';
    button[number].style.top = '107px';
    if(number == 3){
        button[number].style.left = '142px';
    }
    if(number == 2){
        button[number].style.left = '152px';
    }
    if(number == 1){
        button[number].style.left = '162px';
    }
    if(number == 0){
        button[number].style.left = '172px';
    }
}

function bigCircle1140(number){
    button[number].style.width = '14px';
    button[number].style.height = '14px';
    button[number].style.borderRadius = '7px';
    button[number].style.backgroundColor = 'rgb(250, 3, 3)';
    button[number].style.top = '213px';
    if(number == 3){
        button[number].style.left = '283px';
    }
    if(number == 2){
        button[number].style.left = '303px';
    }
    if(number == 1){
        button[number].style.left = '323px';
    }
    if(number == 0){
        button[number].style.left = '343px';
    }
}

function smallCircle1140(number){
    button[number].style.width = '10px';
    button[number].style.height = '10px';
    button[number].style.borderRadius = '5px';
    button[number].style.backgroundColor = 'white';
    button[number].style.top = '215px';
    if(number == 3){
        button[number].style.left = '285px';
    }
    if(number == 2){
        button[number].style.left = '305px';
    }
    if(number == 1){
        button[number].style.left = '325px';
    }
    if(number == 0){
        button[number].style.left = '345px';
    }
}

window.addEventListener('resize' , startButtonsPosition);

function startButtonsPosition(){
    if(Number(window.screen.width) >= 960){
        smallCircle1140(0);
        smallCircle1140(1);
        smallCircle1140(2);
        smallCircle1140(3);
    }else if(Number(window.screen.width) < 960){
        smallCircle360(0);
        smallCircle360(1);
        smallCircle360(2);
        smallCircle360(3);
    }
}

button[0].addEventListener('click' , b0);
button[1].addEventListener('click' , b1);
button[2].addEventListener('click' , b2);
button[3].addEventListener('click' , b3);

function b0(){
    clearInterval(intervalTag);
    pic[opacNumber].style.opacity = '0';
    pic[0].style.opacity = '1';
    pic[1].style.opacity = '0';
    opacNumber = 0;
    fadeNumber = 1;
    circleErase();
    screenCheckBigCircle(0);
    intervalTag = setInterval(change , 5000);
}

function b1(){
    clearInterval(intervalTag);
    pic[opacNumber].style.opacity = '0';
    pic[1].style.opacity = '1';
    pic[2].style.opacity = '0';
    opacNumber = 1;
    fadeNumber = 2;
    circleErase();
    screenCheckBigCircle(1);
    intervalTag = setInterval(change , 5000);
}

function b2(){
    clearInterval(intervalTag);
    pic[opacNumber].style.opacity = '0';
    pic[2].style.opacity = '1';
    pic[3].style.opacity = '0';
    opacNumber = 2;
    fadeNumber = 3;
    circleErase();
    screenCheckBigCircle(2);
    intervalTag = setInterval(change , 5000);
}

function b3(){
    clearInterval(intervalTag);
    pic[opacNumber].style.opacity = '0';
    pic[3].style.opacity = '1';
    pic[0].style.opacity = '0';
    opacNumber = 3;
    fadeNumber = 0;
    circleErase();
    screenCheckBigCircle(3);
    intervalTag = setInterval(change , 5000);
}

function circleErase(){
    screenCheckSmallCircle(0);
    screenCheckSmallCircle(1);
    screenCheckSmallCircle(2);
    screenCheckSmallCircle(3);
}

rButton.addEventListener('click' , moveForward);

function moveForward(){
    clearInterval(intervalTag);
    change();
    intervalTag = setInterval(change , 5000);
}

lButton.addEventListener('click' , moveBackward);

function moveBackward(){
    if(opacNumber == 0){
        b1();
    }else if(opacNumber == 1){
        b2();
    }else if(opacNumber == 2){
        b3();
    }else if(opacNumber == 3){
        b0();
    }
}





/************************************************************************/


//navigator code

let item = document.querySelectorAll('nav .item');
let lastItem , nowItem , nextItem;
nowItem = 0;
lastItem = 3;

let intervalTag2 = setInterval(menuShow , 5000);

function menuShow(){
    item[nowItem].classList.add('hover');
    item[lastItem].classList.remove('hover');
    nowItem++;
    if(nowItem == 4){
        nowItem = 0;
    }
    lastItem++;
    if(lastItem == 4){
        lastItem = 0;
    }
}

let nav = document.querySelector('nav');
nav.addEventListener('mouseenter' , clearShow);
nav.addEventListener('mouseleave' , setShow);
function setShow(){
    intervalTag2 = setInterval(menuShow , 5000);
}
function clearShow(){
    clearInterval(intervalTag2);
    let activeItem = nowItem - 1;
    if(activeItem < 0){
        activeItem = 3;
    }
    item[activeItem].classList.remove('hover');
}





/**********************************************************************/



//market code

let market = document.querySelector('#market');
let productA = document.querySelectorAll('.product .purchase a');
let productC = document.querySelectorAll('.product .curtain');
let proNumber = 0;

let intervalTag3 = setInterval(choose , 5000);

function choose(){
    productA[proNumber].classList.add('hover2');
    productC[proNumber].classList.add('hover3');

    if(proNumber == 0){
        proNumber = 1;
    }else if(proNumber == 1){
        proNumber = 0;
    }

    productA[proNumber].classList.remove('hover2');
    productC[proNumber].classList.remove('hover3');
}

market.addEventListener('mouseenter' , chooseOff);
market.addEventListener('mouseleave' , chooseOn);

function chooseOff(){
    clearInterval(intervalTag3);
    productA[0].classList.remove('hover2');
    productC[1].classList.remove('hover3');
    productA[1].classList.remove('hover2');
    productC[0].classList.remove('hover3');
}

function chooseOn(){
    intervalTag3 = setInterval(choose , 5000);
}





/**********************************************************************/



//page elements' "slide and fade by scrolling" code

let page = document.querySelectorAll('.page');
let personalInfo = document.querySelectorAll('.personal-info');
let fader = document.querySelector('#fader');
let profile = document.querySelector('#profile');

if(Number(window.screen.width) >= 960){
    document.body.onscroll = scrollPAge960;
}
if(Number(window.screen.width) >= 720 && Number(window.screen.width) < 960){
    document.body.onscroll = scrollPAge720;
}
if(Number(window.screen.width) < 720){
    document.body.onscroll = scrollPAge360;
}

window.addEventListener('resize' , screenWidthCheck);

function screenWidthCheck(){
    if(Number(window.screen.width) >= 960){
        resetTheProperties();
        document.body.onscroll = scrollPAge960;
    }
    if(Number(window.screen.width) >= 720 && Number(window.screen.width) < 960){
        resetTheProperties();
        document.body.onscroll = scrollPAge720;
    }
    if(Number(window.screen.width) < 720){
        resetTheProperties();
        document.body.onscroll = scrollPAge360;
    }
}

function scrollPAge360(){
    console.log(pageYOffset);
    if(pageYOffset < 50){
        personalInfo[0].style.left = '100px';
        personalInfo[0].style.opacity = 0;
        outer.style.left = '100px';
        outer.style.opacity = 0;
    }
    if(window.pageYOffset > 50){
        personalInfo[0].style.left = 0;
        personalInfo[0].style.opacity = 1;
        outer.style.left = 0;
        outer.style.opacity = 1;
    }
    if(pageYOffset < 400){
        personalInfo[1].style.left = '100px';
        personalInfo[1].style.opacity = 0;
    }
    if(pageYOffset > 400){
        personalInfo[1].style.left = 0;
        personalInfo[1].style.opacity = 1;
    }
    if(pageYOffset < 400){
        profile.style.left = '100px';
        profile.style.opacity = 0;
    }
    if(pageYOffset > 400){
        profile.style.left = 0;
        profile.style.opacity = 1;
    }
    if(pageYOffset < 1000){
        personalInfo[2].style.left = '100px';
        personalInfo[2].style.opacity = 0;
        fader.style.left = '100px';
        fader.style.opacity = 0;
    }
    if(pageYOffset > 1000){
        personalInfo[2].style.left = 0;
        personalInfo[2].style.opacity = 1;
        fader.style.left = 0;
        fader.style.opacity = 1;
    }
    if(pageYOffset < 1575){
        market.style.left = '100px';
        market.style.opacity = 0;
    }
    if(pageYOffset > 1575){
        market.style.left = 0;
        market.style.opacity = 1;
    }
    if(pageYOffset < 1280){
        personalInfo[3].style.left = '100px';
        personalInfo[3].style.opacity = 0;
    }
    if(pageYOffset > 1280){
        personalInfo[3].style.left = 0;
        personalInfo[3].style.opacity = 1;
    }
    if(pageYOffset < 2300){
        personalInfo[4].style.left = '100px';
        personalInfo[4].style.opacity = 0;
        nav.style.left = '100px';
        nav.style.opacity = 0;
    }
    if(pageYOffset > 2300){
        personalInfo[4].style.left = 0;
        personalInfo[4].style.opacity = 1;
        nav.style.left = 0;
        nav.style.opacity = 1;
    }
}

function scrollPAge720(){
    console.log(pageYOffset);
    if(pageYOffset < 200){
        personalInfo[0].style.right = '100px';
        personalInfo[0].style.opacity = 0;
        outer.style.left = '100px';
        outer.style.opacity = 0;
    }
    if(window.pageYOffset > 200){
        personalInfo[0].style.right = 0;
        personalInfo[0].style.opacity = 1;
        outer.style.left = 0;
        outer.style.opacity = 1;
    }
    if(pageYOffset < 400){
        personalInfo[1].style.left = '100px';
        personalInfo[1].style.opacity = 0;
        profile.style.left = '100px';
        profile.style.opacity = 0;
    }
    if(pageYOffset > 400){
        personalInfo[1].style.left = 0;
        personalInfo[1].style.opacity = 1;
        profile.style.left = 0;
        profile.style.opacity = 1;
    }
    if(pageYOffset < 715){
        personalInfo[2].style.right = '100px';
        personalInfo[2].style.opacity = 0;
        fader.style.left = '100px';
        fader.style.opacity = 0;
    }
    if(pageYOffset > 715){
        personalInfo[2].style.right = 0;
        personalInfo[2].style.opacity = 1;
        fader.style.left = 0;
        fader.style.opacity = 1;
    }
    if(pageYOffset < 1000){
        personalInfo[3].style.left = '100px';
        personalInfo[3].style.opacity = 0;
        market.style.left = '100px';
        market.style.opacity = 0;
    }
    if(pageYOffset > 1000){
        personalInfo[3].style.left = 0;
        personalInfo[3].style.opacity = 1;
        market.style.left = 0;
        market.style.opacity = 1;
    }
    if(pageYOffset < 1430){
        personalInfo[4].style.left = '100px';
        personalInfo[4].style.opacity = 0;
        nav.style.left = '100px';
        nav.style.opacity = 0;
    }
    if(pageYOffset > 1430){
        personalInfo[4].style.left = 0;
        personalInfo[4].style.opacity = 1;
        nav.style.left = 0;
        nav.style.opacity = 1;
    }
}

function scrollPAge960(){
    console.log(pageYOffset);
    if(pageYOffset < 300){
        personalInfo[0].style.right = '100px';
        personalInfo[0].style.opacity = 0;
        outer.style.left = '100px';
        outer.style.opacity = 0;
    }
    if(window.pageYOffset > 300){
        personalInfo[0].style.right = 0;
        personalInfo[0].style.opacity = 1;
        outer.style.left = 0;
        outer.style.opacity = 1;
    }
    if(pageYOffset < 715){
        personalInfo[1].style.left = '100px';
        personalInfo[1].style.opacity = 0;
        profile.style.left = '100px';
        profile.style.opacity = 0;
    }
    if(pageYOffset > 715){
        personalInfo[1].style.left = 0;
        personalInfo[1].style.opacity = 1;
        profile.style.left = 0;
        profile.style.opacity = 1;
    }
    if(pageYOffset < 1220){
        personalInfo[2].style.right = '100px';
        personalInfo[2].style.opacity = 0;
        fader.style.left = '100px';
        fader.style.opacity = 0;
    }
    if(pageYOffset > 1220){
        personalInfo[2].style.right = 0;
        personalInfo[2].style.opacity = 1;
        fader.style.left = 0;
        fader.style.opacity = 1;
    }
    if(pageYOffset < 1630){
        personalInfo[3].style.left = '100px';
        personalInfo[3].style.opacity = 0;
        market.style.left = '100px';
        market.style.opacity = 0;
    }
    if(pageYOffset > 1630){
        personalInfo[3].style.left = 0;
        personalInfo[3].style.opacity = 1;
        market.style.left = 0;
        market.style.opacity = 1;
    }
    if(pageYOffset < 2090){
        personalInfo[4].style.left = '100px';
        personalInfo[4].style.opacity = 0;
        nav.style.left = '100px';
        nav.style.opacity = 0;
    }
    if(pageYOffset > 2090){
        personalInfo[4].style.left = 0;
        personalInfo[4].style.opacity = 1;
        nav.style.left = 0;
        nav.style.opacity = 1;
    }
}

function resetTheProperties(){
    personalInfo[0].style.removeProperty('left');
    personalInfo[0].style.removeProperty('right');
    outer.style.removeProperty('left');
    outer.style.removeProperty('right');
    personalInfo[1].style.removeProperty('left');
    personalInfo[1].style.removeProperty('right');
    profile.style.removeProperty('left');
    profile.style.removeProperty('right');
    personalInfo[2].style.removeProperty('left');
    personalInfo[2].style.removeProperty('right');
    fader.style.removeProperty('left');
    fader.style.removeProperty('right');
    market.style.removeProperty('left');
    market.style.removeProperty('right');
    personalInfo[3].style.removeProperty('left');
    personalInfo[3].style.removeProperty('right');
    personalInfo[4].style.removeProperty('left');
    personalInfo[4].style.removeProperty('right');
    nav.style.removeProperty('left');
    nav.style.removeProperty('right');
}






/*************************************************************************/






//toolbar button code

let menuButton = document.querySelector('#toolbar img');
let topmenu = document.querySelector('#toolbar ul');
let toolbarItem = document.querySelectorAll('#toolbar a');
let open = false;

menuButton.addEventListener('click' , fall);

function fall(){
    if(open == false){
        if(Number(window.screen.width) < 720){
            topmenu.style.height = '150px';
        }else if(Number(window.screen.width) >= 720){
            topmenu.style.height = '250px';
        }
        open = true;
    }else if(open == true){
        topmenu.style.height = '0';
        open = false;
    }
}

for(let i of toolbarItem){
    i.addEventListener('click' , toolbarDisapear);
}

function toolbarDisapear(){
    topmenu.style.height = 0;
    open = false;
}




/*********************************************************************/




//navigator code during 360px,720px and 960px width 

let navitem = document.querySelectorAll('.item >a');
let navsubitem = document.querySelectorAll('.subitem >a')

for(let i=0; i < navitem.length; i++){
    navitem[i].index = 0;
    navitem[i].addEventListener('click' , navFall);
}

for(let i=0; i < navsubitem.length; i++){
    navsubitem[i].index = 0;
    navsubitem[i].addEventListener('click' , navFall);
}

function navFall(event){
    event.preventDefault();
    let i = event.target.index;
    let item = event.target.nextSibling.nextSibling;
    if(i == 0){
        item.style.display = 'block';
        event.target.index = 1;
    }else if(i == 1){
        item.style.display = 'none';
        event.target.index = 0;
    }
}




/**************************************************************************/

//header code

let hImg = document.querySelectorAll('header img');
let hImgNumber = 1;

changer();
setInterval(changer , 5000);

function changer(){
    hImg[hImgNumber].style.opacity = '0';
    hImg[hImgNumber].style.transform = 'scale(1)';
    if(hImgNumber == 0){
        hImgNumber = 1;
    }else{
        hImgNumber = 0;
    }
    hImg[hImgNumber].style.opacity = '1';
    hImg[hImgNumber].style.transform = 'scale(1.1)';
}
