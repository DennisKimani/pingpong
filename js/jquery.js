var kong=[];
 var king = function (number) {
   for (var i = 1; i <= number; i++) {
     if ((i % 3 === 0) && (i % 5 === 0)) {
       kong.push('PingPong')
    } else if (i % 3 === 0) {
      kong.push('Ping')
    } else if (i % 5 === 0){
        kong.push('Pong')
    } else {
      kong.push(i)
    }
  }
  return kong;
 }


//user interface begins here//
$(document).ready(function() {
       $("form#Ping-Pong").submit(function(event) {
         event.preventDefault();
          $("ul#any").empty();
             var number = parseInt($("input#game").val());
             var output=king(number)
             output.forEach(function(number){
               $("ul#any").append("<li>"+number+"</li>")
             });
           });
         });
