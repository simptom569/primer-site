$(document).ready(function(){
    $(document).on("click", "#about",function(){
        $("html, body").animate({
            scrollTop: $(".warper2").offset().top
        }, 600);
    });
});

$(document).ready(function(){
    $(document).on("click", "#speakers",function(){
        $("html, body").animate({
            scrollTop: $(".warper3").offset().top
        }, 800);
    });
});

$(document).ready(function(){
    $(document).on("click", "#program",function(){
        $("html, body").animate({
            scrollTop: $(".warper5").offset().top
        }, 1500);
    });
});

$(document).ready(function(){
    $(document).on("click", "#tickets",function(){
        $("html, body").animate({
            scrollTop: $(".warper7").offset().top
        }, 2000);
    });
});

$(document).ready(function(){
    $(document).on("click", "#menu-button",function(){
        document.getElementById("side-panel").style.width = "220px";
    })
})

$(document).ready(function(){
    $(document).on("click", "#close-menu",function(){
        document.getElementById("side-panel").style.width = "0px";
    })
})