// Close Links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
});

// Fixed Navbar
const navbar = document.querySelector("nav");

window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight) {
        navbar.classList.add("fix-nav");
    } else{
        navbar.classList.remove("fix-nav");
    }
});

// Smooth Scroll
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fix-nav");
        let position = element.offsetTop - navHeight;
        console.log(position);
        if(!fixedNav){
            position = position - navHeight;
        }
        if(navHeight > 97){
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});

// Show More Projects
const btnShowMore = document.querySelector(".btn-show-all-project");
const show = document.querySelector(".more-project");
const textChange = document.getElementById("text-change");

btnShowMore.addEventListener("click", function(){
    show.classList.toggle("hide");
    if (textChange.innerHTML === "Show all Project") {
        textChange.innerHTML = "See Less Project";
    }else {
        textChange.innerHTML = "Show all Project";
    }
    
});