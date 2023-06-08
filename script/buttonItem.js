let quantity = document.getElementById("quantity");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");

quantity.value=0;


minus.addEventListener("click", function(){
    quantity.value=quantity.value-1;
});

plus.addEventListener("click", function(){
    quantity.value=quantity.value+1;
});

