let daynight = document.querySelector(".daynight");
let banner = document.querySelector(".banner");


daynight.addEventListener("click", () => { 
    banner.classList.toggle("night");

})

let typingEffect = new Typed("#text", {
    strings: ["Vaibhav", "Web Developer","Programmer","Learner","Designer"],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});