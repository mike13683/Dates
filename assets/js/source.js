$(document).ready(function(){

    // hero
    $(".hero__body .one").hover(function(){
        $(".carousel-item").removeClass("active")
        $(".hero__media .one").addClass("active")
        $(".hero-bg-colour").css("background-color","rgb(77, 83, 166)")
    })

    $(".hero__body .two").hover(function(){
        $(".carousel-item").removeClass("active")
        $(".hero__media .two").addClass("active")
        $(".hero-bg-colour").css("background-color","rgb(242, 114, 68")
    })

    $(".hero__body .three").hover(function(){
        $(".carousel-item").removeClass("active")
        $(".hero__media .three").addClass("active")
        $(".hero-bg-colour").css("background-color","rgb(95, 191, 80)")
    })

    $(".hero__body .four").hover(function(){
        $(".carousel-item").removeClass("active")
        $(".hero__media .four").addClass("active")
        $(".hero-bg-colour").css("background-color","rgb(17, 38, 32")
    })

    $(".hero__body .five").hover(function(){
        $(".carousel-item").removeClass("active")
        $(".hero__media .five").addClass("active")
        $(".hero-bg-colour").css("background-color","rgb(191, 35, 21)")
    })

    $(".hero__body .six").hover(function(){
        $(".carousel-item").removeClass("active")
        $(".hero__media .six").addClass("active")
        $(".hero-bg-colour").css("background-color","rgb(56, 29, 115)")
    })

});


