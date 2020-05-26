// alert("Hello")

$(document).ready(() => {
    // alert("hello")
    var openMainNav = false
    $(".menu-icon").on('click', function () {
        if (openMainNav === false) {
            $(".menu-btn-icon").css({ "transform": "rotate(90deg)", "transition": "transform 250m ease-in-out" })
            $(".nav-tab").show(1000)
            openMainNav = true
        }
        else if (openMainNav === true) {
            $(".menu-btn-icon").css({ "transform": "rotate(0deg)", "transition": "transform 250m ease-in-out" })
            $(".nav-tab").hide(1000)
            openMainNav = false
        }
    })
})


// main navigation bar sticky effect
window.onscroll = function () { myFunction() };
var navbar = document.getElementById("main-navigation");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


// main navigation links activation
// observing main navigation active links
const pageSections = document.querySelectorAll(".pageSection")
const sectionOption = {
    thresholds: 1,
    rootMargin: "-100px"
}


const pageSectionObserver = new IntersectionObserver((entries, pageSectionObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        if (entry.target.id === "about-section") {
            const navLists = document.querySelectorAll(".nav-list")
            navLists.forEach(link => {
                if (link.id === "about-list") {
                    for (let sibling of link.parentNode.children) {
                        link.classList.add("active")
                        if (sibling !== this) sibling.classList.remove('active');
                    }
                }
            })
        }
        if (entry.target.id === "works") {
            const navLists = document.querySelectorAll(".nav-list")
            navLists.forEach(link => {
                if (link.id === "portfolio-list") {
                    link.classList.add("active")
                    for (let sibling of link.parentNode.children) {
                        link.classList.add("active")
                        if (sibling !== this) sibling.classList.remove('active');
                    }
                }
            })
        }
        if (entry.target.id === "contact-me") {
            const navLists = document.querySelectorAll(".nav-list")
            navLists.forEach(link => {
                if (link.id === "contact-list") {
                    link.classList.add("active")
                    for (let sibling of link.parentNode.children) {
                        link.classList.add("active")
                        if (sibling !== this) sibling.classList.remove('active');
                    }
                }
            })
        }
        // entry.target.classList.toggle("red")
    })
}, sectionOption)
pageSections.forEach(section => {
    pageSectionObserver.observe(section)
})



