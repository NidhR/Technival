

$(document).ready(function() {

	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 1500);



});
$("#add").on("click", function() {
  $("<p> XXX XXXX XX XXX XXXX XX XXX XXXX XX XXX XXXX XX XXX XXXX XX XXX XXXX XX XXX XXXX XX XXX XXXX XX XXX XXXX XX XXX XXXX XX XXX XXXX XX XXX XXXX XX XXX XXXX XX XXX XXXX XX XXX XXXX XX XXX XXXX XX XXX XXXX XX XXX XXXX XX XXX XXXX XX XXX XXXX XX XXX XXXX XX  </p>").appendTo(".content");
});

$(document).ready(function(){
    $(".button a").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);
    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});
