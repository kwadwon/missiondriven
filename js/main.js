$(document).ready(function(){
	$("#motto").click(function(event){
		event.preventDefault();
		//check on firefox and ie and chrome
		$("html, body").animate({scrollTop:707}, 1000);
	});

	$("#healing").click(function(event){
		event.preventDefault();
		//check on firefox and ie and chrome
		$("html, body").animate({scrollTop:1370}, 1000);
	});

	$("#teaching").click(function(event){
		event.preventDefault();
		//check on firefox and ie and chrome
		$("html, body").animate({scrollTop:2120}, 1000);
	});

	$("#preaching").click(function(event){
		event.preventDefault();
		//check on firefox and ie and chrome
		$("html, body").animate({scrollTop:2845}, 1000);
	});

	$("#btt").click(function(event){
		event.preventDefault();
		//check on firefox and ie and chrome
		$("html, body").animate({scrollTop:0}, 1000);
	});
});