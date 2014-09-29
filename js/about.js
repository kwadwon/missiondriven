$(document).ready(function(){
	
		$("#ways").click(function(event){
		event.preventDefault();
		//check on firefox and ie and chrome
		var offset = $("#what_we_do").offset().top;
		$("html, body").animate({scrollTop:offset-99}, 1000);
	});
});



