$(document).ready(function(){

	function hideAll(){
		$("#healing_div").hide();
		$("#teaching_div").hide();
		$("#preaching_div").hide();
		$("#intro").hide();


	}
	$("#toHdiv").click(function(){
		hideAll();
		$("#header_name").text("Healing");
		$("#healing_div").show();

	});
	$("#toTdiv").click(function(){
		hideAll();
		$("#header_name").text("Teaching");
		$("#teaching_div").show();
	});
	$("#toPdiv").click(function(){
		hideAll();
		$("#header_name").text("Preaching");
		$("#preaching_div").show();
	});
});