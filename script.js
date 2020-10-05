const navbutton = document.getElementById('nav-button');
const displaynav = document.getElementById('navbar');
const navclose= document.getElementById('navbar-close')

navbutton.addEventListener('click',()=>{
    navbar.classList.add("display-navbar");

});
navclose.addEventListener('click',()=>{
    navbar.classList.remove("display-navbar");

});
