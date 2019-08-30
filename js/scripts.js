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
    $("#orderPizza").text(pizzaOrder.size);
    $("#orderTopping").text(pizzaOrder.topping);

  });

});






//Back End//
function Pizza (size, topping = []){
  this.size = size,
  this.topping = topping
}

Pizza.prototype.addTopping = function(topping){
  this.topping.push(topping);
  return this.topping;
}
