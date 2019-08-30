//Front End//
$(document).ready(function(){
  $("#order").submit(function(event){
    event.preventDefault();
    var sizeInput = $("select#size").val();
    var pizzaOrder = new Pizza (sizeInput);
    $("input:checkbox:checked").each(function(){
      var toppingInput = $(this).val();
      pizzaOrder.addTopping(toppingInput);
    });

    var price = 0
    $(".totalPizza").text(pizzaOrder.addAmount(price));

    $("#orderPizza").text(pizzaOrder.size);
    $("#orderTopping").text(pizzaOrder.topping);
  });
});

//Back End//
function Pizza (size, topping = [], price){
  this.size = size,
  this.topping = topping,
  this.price = 0
}

Pizza.prototype.addTopping = function(topping){
  this.topping.push(topping);
  return this.topping;
}

Pizza.prototype.addAmount = function(amount){
  if (this.size === "small"){
    amount = parseInt(10)
  } else if (this.size === "medium"){
    amount = parseInt(15)
  } else {
    amount = parseInt(20)
  }
  this.price += amount
  return this.price;
}
