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

    // services
    const servicesController = new ScrollMagic.Controller();

    const servicesTween = gsap.timeline();

    servicesTween.fromTo(".services__media img", 2, {autoAlpha:0}, {autoAlpha:1, stagger: 0.5})

    const servicesScene = new ScrollMagic.Scene({
        triggerElement:".services"
    })

        .setTween(servicesTween)
        // .addIndicators({
        //     name:"servicesScene"
        // })
        .addTo(servicesController)

    // jumbotron
    const jumbotronController = new ScrollMagic.Controller();

    const jumbotronTween = gsap.timeline();

    jumbotronTween.fromTo(".jumbotron", 1.3, {autoAlpha:0, y:"25px"}, {autoAlpha:1, y:0})

    const jumbotronScene = new ScrollMagic.Scene({
        triggerElement:".jumbotron"
    })

        .setTween(jumbotronTween)
        // .addIndicators({
        //     name:"jumbotron"
        // })
        .addTo(jumbotronController)

    // gallery left
    $(".gallery-bg-colour-primary .gallery").each(function(){

    const galleryController = new ScrollMagic.Controller();

    const galleryTween = gsap.timeline();

    galleryTween.fromTo(this, 1, {autoAlpha:0, x:"25px"}, {autoAlpha:1, x:0})

    const galleryScene = new ScrollMagic.Scene({
        triggerElement:this
    })

        .setTween(galleryTween)
        // .addIndicators({
        //     name:"gallery"
        // })
        .addTo(galleryController)

    })

    // gallery right
    $(".gallery-bg-colour-secendary .gallery").each(function(){

        const galleryController = new ScrollMagic.Controller();

        const galleryTween = gsap.timeline();

        galleryTween.fromTo(this, 1, {autoAlpha:0, x:"-25px"}, {autoAlpha:1, x:0})

        const galleryScene = new ScrollMagic.Scene({
            triggerElement:this
        })

            .setTween(galleryTween)
            // .addIndicators({
            //     name:"gallery"
            // })
            .addTo(galleryController)

    })

    // work

    const workController = new ScrollMagic.Controller();

    const workTween = gsap.timeline();

    workTween.to(".work--height-one", 1, {height:"450px"})
    workTween.to(".work--height-three", 1, {height:"450px"})


    const workScene = new ScrollMagic.Scene({
        triggerElement:"#work",
        offset:"-550px",
        duration:"550px"
    })

        .setTween(workTween)
        // .addIndicators({
        //     name:"work"
        // })
        .addTo(workController)

    // Reminder
    const visualController = new ScrollMagic.Controller();

    const visualTween = gsap.timeline();

    visualTween.fromTo(".visual--bg-colour", 2, {backgroundColor:"#D9D9D9", transformOrigin:"right", scaleX:0}, {backgroundColor:"#F2B705", scaleX:1})

    const visualScene = new ScrollMagic.Scene({
        triggerElement:"#visual",
        duration: "400px"
    })

        .setTween(visualTween)
        // .addIndicators({
        //     name:"visual"
        // })
        .addTo(visualController)

    // Reminders
    const reminderController = new ScrollMagic.Controller();

    const reminderTween = gsap.timeline();

    reminderTween.fromTo(".reminders--bg-colour", 2, {backgroundColor:"#D9D9D9", transformOrigin:"left", scaleX:0}, {backgroundColor:"#F2B705", scaleX:1})

    const reminderScene = new ScrollMagic.Scene({
        triggerElement:"#reminder",
        duration: "400px"
    })

        .setTween(reminderTween)
        // .addIndicators({
        //     name:"reminder"
        // })
        .addTo(reminderController)


    // closing
    const closingController = new ScrollMagic.Controller();

    const closingTween = gsap.timeline();

    closingTween.to(".closing-bg-colour-two", {backgroundColor:"#185A8C"})
    closingTween.to(".closing-media svg", {y:"650px", scale:0.8},"+=0.1")


    const closingScene = new ScrollMagic.Scene({
        triggerElement:"#closing",
        duration: "550px"
    })

        .setTween(closingTween)
        // .addIndicators({
        //     name:"closing"
        // })
        .addTo(closingController)


});


