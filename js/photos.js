$(document).ready(function(){
    Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');

    $("#baptism_pics_control").click(function(){
        var offset = $("#baptism_pics").offset().top;
        $("html, body").animate({scrollTop:offset-132}, 1000);
    })

    $("#church_pics_control").click(function(){
        var offset = $("#church_pics").offset().top;
        $("html, body").animate({scrollTop:offset-132}, 1000);
    })

     $("#team_pics_control").click(function(){
         var offset = $("#team_pics").offset().top;
         $("html, body").animate({scrollTop:offset-132}, 1000);
     })
    Galleria.run('.galleria')



});
