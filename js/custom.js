$(document).on("ready",function(){
    
})








// start loading screen 

$(window).on("load",function(){
    $(".lds-spinner").fadeOut(900,function(){
        $(this).parent().fadeOut(800,function(){
            $(this).remove();
        }
        )
    });
})

//end loading screen