
document .getElementById("id").innerHTML("life hacks");
function myfunction() {
    alert("Welcome to Davis Project")
}

// JavaScript to toggle the visibility of the search box
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');

}
// Hiden Memu And Search Box on Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}
// Header
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
function register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Dummy registration logic for demonstration purposes
    // In a real application, you would send this data to a server for processing
    alert("Registration successful! Your username is: " + username);
    // Redirect to login page upon successful registration
    // window.location.href = "login.html";
}
