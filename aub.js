var x = window.matchMedia("(min-width: 45em)")
myFunction(x)
x.addListener(myFunction)

function myFunction(x) {
    if (x.matches) { 

let nav = document.querySelectorAll('.home>a');
console.log(nav);

function changeA() {
    nav[0].innerHTML = "about";
}
function changeZ() {
    nav[1].innerHTML = "film";
}
function changeW() {
    nav[2].innerHTML = "résumé";
}

nav[0].addEventListener('mouseover', changeA);
nav[1].addEventListener('mouseover', changeZ);
nav[2].addEventListener('mouseover', changeW);

function resetA(){
    nav[0].innerHTML = "aubrey";
}
function resetZ(){
    nav[1].innerHTML = "zehui";
}
function resetW(){
    nav[2].innerHTML = "wang";
}

nav[0].addEventListener('mouseout', resetA);
nav[1].addEventListener('mouseout', resetZ);
nav[2].addEventListener('mouseout', resetW);
    
}
}

document.getElementById("js").style.color = "yellow";

let day = new Date().getDay();
console.log('Day: ' + day);