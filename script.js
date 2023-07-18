var tl = gsap.timeline();


tl.from(".profile-image,.profile-details h1, .profile-details h3, .profile-details p, .profile-socials", {
    y: 100,
    opacity: 0,
    stagger: .3
})
tl.from(".item", {
    y: 100,
    opacity: 0,
    duration: .8,
    stagger: .2
})
