$(document).ready(function() {

	$("#nav-01").on('click', function() {
	    $('.active').removeClass('active');
	    $("body > img").removeClass("opaque");
	    $("body > img").eq(0).addClass("opaque");
		$('body').attr('title', 'Atlanta');
	    $("#inner-img-container img").removeClass("opaque");
	    $("#inner-img-container img").eq(0).addClass("opaque");	
	    $("#inner-img-container img").eq(2).attr('title','Tbilisi');
	    $(this).addClass('active');
	    $('#atlanta-photo-cred').attr('href','https://unsplash.com/@gcalebjones');
		$('#atlanta-photo-cred').text('Caleb Jones');
		$('#tbilisi-photo-cred').attr('href','https://unsplash.com/@artemisfaul');
		$('#tbilisi-photo-cred').text('Artemis Faul');
	});

	$("#nav-02").on('click', function() {
		$('.active').removeClass('active');
		$("body > img").removeClass("opaque");
		$("body > img").eq(1).addClass("opaque");
		$('body').attr('title', 'Tbilisi');
		$("#inner-img-container img").removeClass("opaque");
		$("#inner-img-container img").eq(1).addClass("opaque");	
		$("#inner-img-container img").eq(2).attr('title','Atlanta');
		$(this).addClass('active');
		$('#atlanta-photo-cred').attr('href','https://unsplash.com/@whoisflo');
		$('#atlanta-photo-cred').text('Florian Hahn');
		$('#tbilisi-photo-cred').attr('href','https://unsplash.com/@shotbyrez');
		$('#tbilisi-photo-cred').text('Reza Tahvili');
	});

	$("#nav-03").on('click', function() {
		$('.active').removeClass('active');
		$("body > img").removeClass("opaque");
		$("body > img").eq(2).addClass("opaque");
		$('body').attr('title', 'Atlanta');
		$("#inner-img-container img").removeClass("opaque");
		$("#inner-img-container img").eq(2).addClass("opaque");	
		$("#inner-img-container img").eq(2).attr('title','Tbilisi');
		$(this).addClass('active');
		$('#atlanta-photo-cred').attr('href','https://unsplash.com/@emmahope_15');
		$('#atlanta-photo-cred').text('Emma Valerio');
		$('#tbilisi-photo-cred').attr('href','https://unsplash.com/@ergemla');
		$('#tbilisi-photo-cred').text('Nicholas Design');
	});
});