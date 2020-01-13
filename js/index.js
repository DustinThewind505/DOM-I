const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact📬",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
logo.style.border = "2px dashed red";

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];
middleImg.style.boxShadow = "3px 3px 3px 2px rgba(225, 0, 0, 0.5)";

let navBar = document.querySelectorAll('a');
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];

let mainHeader = document.querySelector('h1');
mainHeader.textContent = siteContent["cta"]["h1"];
mainHeader.style.textShadow = "2px 2px #ff0000";

let mainButton = document.querySelector('button');
mainButton.textContent = siteContent["cta"]["button"];
mainButton.style.boxShadow = "2px 2px 2px 1px rgba(0, 0, 0, 0.2)";

let headingFour = document.getElementsByTagName("h4");
headingFour[0].textContent = siteContent["main-content"]["features-h4"];
headingFour[1].textContent = siteContent["main-content"]["about-h4"];
headingFour[2].textContent = siteContent["main-content"]["services-h4"];
headingFour[3].textContent = siteContent["main-content"]["product-h4"];
headingFour[4].textContent = siteContent["main-content"]["vision-h4"];
headingFour[5].textContent = siteContent["contact"]["contact-h4"];

for(let i = 0; i < headingFour.length; i++){
  headingFour[i].style.backgroundColor = "rgba(0, 0, 225, 0.2)"
  headingFour[i].style.padding = "2% 0";
  headingFour[i].style.borderRadius = "10px";
}

headingFour[5].style.width = "10%"

let pTags = document.getElementsByTagName("p");
pTags[0].textContent = siteContent["main-content"]["features-content"];
pTags[1].textContent = siteContent["main-content"]["about-content"];
pTags[2].textContent = siteContent["main-content"]["services-content"];
pTags[3].textContent = siteContent["main-content"]["product-content"];
pTags[4].textContent = siteContent["main-content"]["vision-content"];
pTags[5].textContent = siteContent["contact"]["address"];
pTags[6].textContent = siteContent["contact"]["phone"];
pTags[7].textContent = siteContent["contact"]["email"];

let footerCopyright = document.querySelector("footer p");
footerCopyright.textContent = siteContent["footer"]["copyright"];

let footer = document.querySelector("footer");
footer.style.fontSize = "4rem"
footer.style.color = "green";

for(let i = 0; i < navBar.length; i++){
  navBar[i].style.color = "green"
}

let newNavContent = document.createElement("a");
let newNavContent2 = document.createElement("a");

newNavContent.textContent = "BLOOD";
newNavContent2.textContent = "BLOOD";

let parentElement = document.querySelector('nav');

parentElement.prepend(newNavContent);
parentElement.appendChild(newNavContent2);
