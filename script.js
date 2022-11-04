const menuContainer = document.querySelector(".menu-container")
const menu = document.querySelector(".menu")
const closes = document.querySelector(".close")
const linkResume = document.querySelector(".link-resume")
const about = document.querySelector(".about")
const porfolio = document.querySelector(".portfolio-link")
const contact = document.querySelector(".contact")
const resume = document.querySelector(".resume")

function openMenu(){
    document.body.style.overflow = "none";
    menuContainer.appendChild(linkResume);
    linkResume.style.display = "block";
    menuContainer.style.display = "block";
}

function closeMenu(){
    menuContainer.style.display = "none";
}

closes.addEventListener("click", closeMenu);
menu.addEventListener("click", openMenu);

about.addEventListener("click",closeMenu)
porfolio.addEventListener("click",closeMenu)
contact.addEventListener("click",closeMenu)
resume.addEventListener("click",closeMenu)