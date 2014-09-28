$(document).ready(function(){
    Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
    $("#baptism_pics_control").click(function(){
        $("#baptism_pics").toggle();
    })

    $("#church_pics_control").click(function(){
        $("#church_pics").toggle();
    })

    Galleria.run('.galleria')
    //$("#baptism_pics").toggle();
    //$("#church_pics").toggle();


});
