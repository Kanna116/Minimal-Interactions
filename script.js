var tl = gsap.timeline();
tl.to("#loader", {
    top:"-100vh",
    delay:2,
    duration:.2

})
tl.from(".profile-image,.profile-details h1, .profile-details h3, .profile-details p, .profile-socials", {
    y: 150,
    opacity: 0,
    stagger: .3,
    duration: .8
})

tl.from("#projects", {
    width: 0,
    duration: .5
})
tl.from(".item", {
    y: 100,
    opacity: 0,
    duration: .8,
    stagger: .3
})
