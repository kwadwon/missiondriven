$(document).ready(function(){
	$("#motto").click(function(event){
		event.preventDefault();
		//check on firefox and ie and chrome
		var offset = $("#c_motto").offset().top;
		$("html, body").animate({scrollTop:offset-50}, 1000);
	});

	$("#healing").click(function(event){
		event.preventDefault();
		//check on firefox and ie and chrome
		var offset = $("#c_healing").offset().top;
		$("html, body").animate({scrollTop:offset-78}, 1000);
	});

	$("#teaching").click(function(event){
		event.preventDefault();
		//check on firefox and ie and chrome
		var offset = $("#c_teaching").offset().top;
		$("html, body").animate({scrollTop:offset-99}, 1000);
	});

	$("#preaching").click(function(event){
		event.preventDefault();
		//check on firefox and ie and chrome
		var offset = $("#c_preaching").offset().top;
		$("html, body").animate({scrollTop:offset-99}, 1000);
	});

	$("#btt").click(function(event){
		event.preventDefault();
		//check on firefox and ie and chrome
		$("html, body").animate({scrollTop:0}, 1000);
	});
});