let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let totalamount = document.querySelector('.price-bar')
let delivery = document.querySelector('.order-bar')
let ordernow = document.querySelector('.order-bar')
let value = document.querySelector('.ordernow-bar')
menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();
// function to get totalAmount
function getTotalAmount() {
  for (let totalAmount of price){
    if (total.checked){
      return total.value;
    }
  }
}
function pizza(getSize, getQuantity, getCrust, getTopping) {
  this.getSize = getSize;
  this.getQuantity = getQuantity;
  this.getCrust = getCrust;
  this.getTopping = getTopping;
}
var userInput = new Order(getSize(), getQuantity(), getCrust(), getTopping());
function getSize() {
  var size = document.getElementById("sizePizza").value;
  return parseInt(size);
}
function getQuantity() {
  var number = document.getElementById("quantityPizza").value;
  return parseInt(number);
}
function getCrust() {
  var crust = document.getElementById("pizzaCrust").value;
  return parseInt(crust);
}
function getTopping() {
  var topping = document.getElementById("pizzaTopping").value;
  return parseInt(topping);
}
function totalAmount() {
  var total = (getSize() + getCrust() + getTopping()) * getQuantity();
  alert(
    "You have ordered" +
    getQuantity("") +
    "pizza" +
    "" +
    "total to ksh. " +
    total +
    "" +
    "Thankyou for your order. Welcome again"
  );

  // Hover Menu

  //   $(".front").hover(function(){
  //     $(this).animate({opacity:'0.3'});
  // }, function(){
  // $(this).animate({opacity:'1'});
  // });

  //       $(".inner").hover(function(){
  //         $(this).animate({opacity:'0.3'});
  //     }, function(){
  //     $(this).animate({opacity:'1'});
  //     });

  //     $(".inner").hover(function(){
  //       $(this).animate({opacity:'0.3'});
  //   }, function(){
  //   $(this).animate({opacity:'1'});
  //   });




  // variable to get the location of the customer
  var location = prompt("Please enter your location to get your pizza delivered.If you do not want it delivered then cancel .");
  if (location !== "") {
    alert("You order will be delivered shortly at ksh300.");
  }
}
$(document).ready(function () {
  $("form#form34A").submit(function (event) {
    // event.preventDefault();
    var email = $("input#MERGE0").val();
    var message = $("textarea#comment").val();
    if ($("input#MERGE0").val()) {
      alert(name + ",message has been received successfully. Thank you for reaching out to us.");

    }

  });

});
