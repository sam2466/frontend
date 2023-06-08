let buttom =document.getElementsByClassName("buttom");
let setting = document.getElementById("setting");
let man = document.getElementById("man");
let buyshop = document.getElementById("buyshop");
let menu = document.getElementById("menu");




















buyshop.addEventListener("click", function() {location.href="home.html";});
man.addEventListener("click", function() {location.href="man.html";});


for(let i = 0; i <buttom.length; i++) {
    buttom[i].addEventListener("mouseover", function() {this.style.backgroundColor="grey"});
    buttom[i].addEventListener("mouseout", function() {this.style.backgroundColor="black"});
}
buyshop.addEventListener("mouseover", function() {this.style.backgroundColor="grey"});
buyshop.addEventListener("mouseout", function() {this.style.backgroundColor="black"});




//let cart = document.getElementById("cart");
//cart.addEventListener("mouseover", function() {this.style.backgroundColor="grey"});
//cart.addEventListener("mouseout", function() {this.style.backgroundColor="black"});
/*
<div class="menu"> 
        <div class="search">
            <input type="text" id="searchName" placeholder="search"> </input>
            <svg xmlns="http://www.w3.org/2000/svg"   id="searchButtom" viewBox="0 0 16 16 "  >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </div>
        <div class="list">
            <ul class="type">
                <li >shoes
                    <ul class="brand">
                        <li>new balance</li>
                        <li>nike</li>
                    </ul>
                </li>
                <li >ram
                    <ul class="brand">
                        <li>kinstone</li>
                        <li>micron</li>
                    </ul>
                </li>

            </ul>

        </div>
        

    </div>