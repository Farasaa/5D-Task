import { serviceArray } from "/data.js";

// Render the navigation bar

let windowSize = 500;


function viewLinks() {
    const links = document.getElementById("myLinks");
    
    if (window.innerWidth < windowSize) {
        if (links.style.display === "block") {
            links.style.display = "none";
        } else {
            links.style.display = "block";
        }
    }
}


function adjustLinksVisibility() {
    const links = document.getElementById("myLinks");
    if (window.innerWidth >= windowSize) {
        links.style.display = "inline"; 
    } else {
        links.style.display = "none"; 
    }
}


function renderNavBar() {
    let pageHeader = `
        <nav>
            <img class="logo" src="/images/logo.png" alt="5d logo" loading="lazy">
            <img class="icon" src="/images/Group 28.png" alt="mobile nav bar" loading="lazy">
            <div id="myLinks">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="careers">Careers</a>
                <a href="#contact">Contact Us</a>
            </div>
        </nav>
    `;
    
    document.querySelector("header").innerHTML = pageHeader;

    
    const icon = document.querySelector(".icon");
    if (icon) {
        icon.addEventListener("click", viewLinks);
    }

    
    adjustLinksVisibility();

    
    window.addEventListener("resize", adjustLinksVisibility);
}

document.addEventListener("DOMContentLoaded", renderNavBar);





// Render the hero section

function renderHeroSection(){

    let heroSection = `
        <h1 class="headings-styles">
                Unlimited Solutions For Your Business 
            </h1>
            <p>
                5D is a digital transformation agency dedicated to turning ideas into digital reality. We combine technology and creativity to help individuals, startups, SMEs, and enterprises connect with customers and reach their goals.
            </p>
            <img class="hero-img" src="/images/undraw_undraw_computer_apps_9ssq_(2)_hyf7.png" alt="a desktop" loading="lazy">
    
    `

    document.querySelector("#hero-section").innerHTML = heroSection

}


// Render the services section

function renderServices(){
let sectionContent = ""

let sectionTitle = `
    <h2 class="headings-styles">
         Our Services 
    </h2>
`
serviceArray.forEach(service =>{

    let serviceFunctions = service.functions.map(func =>
        `<li><span>${func}</span></li>`
        ).join("")

    let serviceButtons = service.buttons.map(btn => {
    
        const hasMultipleButtons = service.buttons.length > 1;
      
    
        return `<button class="${hasMultipleButtons ? 'button-Class' : ''}">${btn}</button>`;
      }).join("");
      

      
      
      

    sectionContent += `
    
     <div class="service-container">
                <p class="service-title">${service.name}</p>
                <div class="adjust-veiw">    
                    <img class="service-image" src=${service.image} alt="${service.alt}" loading="lazy">
                    <ul>
                        ${serviceFunctions}
                    </ul>
                </div>    
                <div class="buttons-containers">
                    ${serviceButtons}
                </div>    
            </div>
    `
})
    return  document.querySelector("#services-section").innerHTML = sectionTitle + sectionContent
}

// Rendering Footer

function renderFooter(){

    let footerRender = `
            <img class="icons" src="images/Social Icons.png" alt="Facebook logo" loading="lazy">
            <img class="icons" src="images/Social Icons (1).png" alt="X logo" loading="lazy">
            <img class="icons" src="images/Social Icons (2).png" alt="email icon" loading="lazy">
            <img class="icons" src="images/Social Icons (3).png" alt="Instagram logo" loading="lazy">
            <img class="icons" src="images/Social Icons (4).png" alt="Linkedin logo" loading="lazy">
    `
    document.querySelector("footer").innerHTML = footerRender

}
// Calling Functions

renderNavBar()
renderHeroSection()
renderServices()
renderFooter()