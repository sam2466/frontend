let setting = document.getElementById("setting");
let man = document.getElementById("man");
let buyshop = document.getElementById("buyshop");
let active = document.getElementById("menu-active");


setting.addEventListener("click", function(){
    active.checked=(active.checked===true?false:true);
});

buyshop.addEventListener("click", function() {
    location.href="home.html";
});
man.addEventListener("click", function() {
    location.href="login.html";
});
