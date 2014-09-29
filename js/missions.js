$(document).ready(function(){


    //if coming to this page from index, look in url to see which section
    var hash = window.location.hash;
    if (hash == "#teaching"){
        setTimeout(function(){
            $("#toTdiv").trigger('click');
        },1)
    }
    else if (hash == "#preaching"){
        setTimeout(function(){
            $("#toPdiv").trigger('click');
        },1)
    }
    else if(hash == "#healing"){
        setTimeout(function(){
            $("#toHdiv").trigger('click');
        },1)
    }



	function hideAll(){
		$("#healing_div").hide();
		$("#teaching_div").hide();
		$("#preaching_div").hide();
		$("#intro").hide();
	}
	$("#toHdiv").click(function(){
		hideAll();
		$("#header_name").text("Our Current Work");
		$("#healing_div").show();

	});
	$("#toTdiv").click(function(){
		hideAll();
		$("#header_name").text("Our Past Work");
		$("#teaching_div").show();
	});
});