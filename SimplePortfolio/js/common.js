$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	var filterizd = $('.filtr-container').filterizr({
	});


	$('li').click(function(e) {
        e.preventDefault();
        $('li').removeClass('active');
        $(this).addClass('active');
    });

    $('.search').click(function() {
    	$('.search-row').toggle();
    });	

    $('.search').click(function() {
    	$('.nav').toggleClass('activated');
    });

    $("li, .more-work").click(function() {
    $('html, body').animate({
        scrollTop: $(".filtr-container").offset().top
    }, 500);
	});

	function fadeIn(){
		// $('.main-title, .more-work').hide();
		$('.main-title, .more-work').delay(100).fadeIn(1000);
	}
	$(document).ready(fadeIn);
});
