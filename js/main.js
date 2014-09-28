$(document).ready(function(){

    //if there is hash in url, go to that section of the page
    var mainhash = window.location.hash;
    if (mainhash == "#motto"){
        setTimeout(function(){
            $("#motto").trigger('click');
        },1)
    } else if (mainhash == "#healing"){
        setTimeout(function(){
            $("#healing").trigger('click');
        },1)
    } else if (mainhash == "#teaching"){
        setTimeout(function(){
            $("#teaching").trigger('click');
        },1)
    } else if (mainhash == "#preaching"){
        setTimeout(function(){
            $("#preaching").trigger('click');
        },1)
    }

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
		$("html, body").animate({scrollTop:offset-132}, 1000);
	});

	$("#teaching").click(function(event){
		event.preventDefault();
		//check on firefox and ie and chrome
		var offset = $("#c_teaching").offset().top;
		$("html, body").animate({scrollTop:offset-130}, 1000);
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



