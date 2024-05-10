function animate() {
    var tl = gsap.timeline();

    tl.from(".card", {
        opacity: 0,
        scale: .9,
        duration: 1.3,
        ease: Expo.easeOut
    })
    .from(".detailselem", {
        opacity: 0,
        y: 4,
        stagger: .2,
        delay: -1,
        duration: 2,
        ease: Expo.easeOut
    })
    .from(".stats", {
        opacity: 0,
        y: 4,
        delay: -1.5,
        duration: 2,
        ease: Expo.easeOut
    })
}

animate();