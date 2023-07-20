const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var tl = gsap.timeline();


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
