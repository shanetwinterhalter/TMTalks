$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#startchange');
	var offset = startchange.offset();
    if (startchange.length){
	$(document).scroll(function() { 
		scroll_start = $(this).scrollTop();
		if(scroll_start > offset.top) {
			$("nav").removeClass("navbar-dark");
			$("nav").addClass("navbar-light");
			$("nav").addClass("bg-light");
        } else {
			$("nav").removeClass("navbar-light");
			$("nav").removeClass("bg-light");
			$("nav").addClass("navbar-dark");
        }
    });
    }
	
	$(".article").hover(function() {
		$(".article").not(this).css( "opacity", 0.33 );
	}, function() { 
		$(".article").css("opacity", 1); }
	);
});