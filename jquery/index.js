// $("h1").addClass("big-title margin");
// $("h1").text("Bye")
// $("button").html("<em>Hey</em>")

// $("h1").click(function(){
//     $("h1").css("color", "purple");
// });

$("button").click(function(){
    $("h1").css("color", "red")
})

$(document).keypress(function(event){
    console.log(event.key);
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").slideUp().slideDown().animate({opacity : 0.5});
});

