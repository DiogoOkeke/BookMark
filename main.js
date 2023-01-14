// Getting access to the DOM

let body = document.querySelector('body');
let loadsSite = document.querySelector('.loads-site');
let mainSite = document.querySelector('.main-site');

/* Nav */

let navBar = document.querySelector('.nav-bar');
let navContent = document.querySelector('.nav-content');
let hamburgerMenu = document.querySelector('#hamburger-menu');
let closeMenu = document.querySelector('#close-menu');
let firstImage = document.querySelector('.first-img');


/* Second Section */
let simpleBookmark = document.querySelector('.sb-caret-div');
let speedySearching = document.querySelector('.ss-caret-div');
let easySharing = document.querySelector('.es-caret-div');
let sbRedDiv = document.querySelector('.sb-red-div');
let ssRedDiv = document.querySelector('.ss-red-div');
let esRedDiv = document.querySelector('.es-red-div');
let sbArrowIcon = document.querySelector('.sb-arrow-icon');
let ssArrowIcon = document.querySelector('.ss-arrow-icon');
let esArrowIcon = document.querySelector('.es-arrow-icon');
let sbSubDiv = document.querySelector('.sb-sub-div');
let ssSubDiv = document.querySelector('.ss-sub-div');
let esSubDiv = document.querySelector('.es-sub-div');


// Fourth section
let faq1Que = document.querySelector('.faq1-que');
let faq2Que = document.querySelector('.faq2-que');
let faq3Que = document.querySelector('.faq3-que');
let faq4Que = document.querySelector('.faq4-que');
let faq1Sub = document.querySelector('.faq1-sub');
let faq2Sub = document.querySelector('.faq2-sub');
let faq3Sub = document.querySelector('.faq3-sub');
let faq4Sub = document.querySelector('.faq4-sub');
let faq1ArrowIcon = document.querySelector('.faq1-arrow-icon');
let faq2ArrowIcon = document.querySelector('.faq2-arrow-icon');
let faq3ArrowIcon = document.querySelector('.faq3-arrow-icon');
let faq4ArrowIcon = document.querySelector('.faq4-arrow-icon');


//Fifth Section
let input = document.querySelector('input');
let errorDiv = document.querySelector('.error-div');
let errorImage = document.querySelector('.error-image');
let errorText = document.querySelector('.error-text');


// Add Main Site

let loadPage = () => {
  loadsSite.style.display = 'none';
  mainSite.classList.add('activeMainSite');
 } 

setTimeout(loadPage, 9000);

// Opening and Closing nav content

hamburgerMenu.onclick = () => {
 navContent.style.display = 'block';
 navContent.style.position = 'fixed';
 navBar.style.display = 'none';
 firstImage.style.marginTop = '8.7rem';
 body.style.overflow = 'hidden';
}

closeMenu.onclick = () => {
 navContent.style.display = 'none';
 navContent.style.position = 'absolute';
 navBar.style.display = 'flex';
 firstImage.style.marginTop = '3rem';
 body.style.overflow = 'auto';
}


// Opening and Closing the features section


simpleBookmark.onclick = () => {
 
 if (getComputedStyle(sbSubDiv).display === 'block'){
 sbRedDiv.style.display = 'block';
 sbArrowIcon.style.transform = 'rotate(360deg)';
 sbArrowIcon.style.color= 'hsl(231, 69%, 60%)';
 sbSubDiv.style.display = 'none';
 }
 
 else{
 sbRedDiv.style.display = 'block';
 sbArrowIcon.style.transform = 'rotate(180deg)';
 sbArrowIcon.style.color= ' hsl(0, 94%, 66%)';
 sbSubDiv.style.display = 'block';
 }
 
}

speedySearching.onclick = () => {
 
 if (getComputedStyle(ssSubDiv).display === 'block') {
 ssRedDiv.style.display = 'block';
 ssArrowIcon.style.transform = 'rotate(360deg)';
 ssArrowIcon.style.color= 'hsl(231, 69%, 60%)';
 ssSubDiv.style.display = 'none';
 }
 
 else{
 ssRedDiv.style.display = 'block';
 ssArrowIcon.style.transform = 'rotate(180deg)';
 ssArrowIcon.style.color= ' hsl(0, 94%, 66%)';
 ssSubDiv.style.display = 'block';
 }
 
}

easySharing.onclick = () => {
 
 if (getComputedStyle(esSubDiv).display === 'block'){
 esRedDiv.style.display = 'block';
 esArrowIcon.style.transform = 'rotate(360deg)';
 esArrowIcon.style.color= 'hsl(231, 69%, 60%)';
 esSubDiv.style.display = 'none';
 }
 
 else{
 esRedDiv.style.display = 'block';
 esArrowIcon.style.transform = 'rotate(180deg)';
 esArrowIcon.style.color= ' hsl(0, 94%, 66%)';
 esSubDiv.style.display = 'block';
 }
 
}


// Opening and Closing the FAQs Section

faq1Que.onclick = () => {
 
 if(getComputedStyle(faq1Sub).display === 'block'){
  faq1Sub.style.display = 'none';
  faq1ArrowIcon.style.transform = 'rotate(360deg)';
  faq1ArrowIcon.style.color = 'hsl(231, 69%, 60%)';
 }
 
 else{
  faq1Sub.style.display = 'block';
  faq1ArrowIcon.style.transform = 'rotate(180deg)';
  faq1ArrowIcon.style.color = ' hsl(0, 94%, 66%)';
 }
 
}


faq2Que.onclick = () => {
 
 if(getComputedStyle(faq2Sub).display === 'block'){
  faq2Sub.style.display = 'none';
  faq2ArrowIcon.style.transform = 'rotate(360deg)';
  faq2ArrowIcon.style.color = 'hsl(231, 69%, 60%)';
 }
 
 else{
  faq2Sub.style.display = 'block';
  faq2ArrowIcon.style.transform = 'rotate(180deg)';
  faq2ArrowIcon.style.color = ' hsl(0, 94%, 66%)';
 }
 
}


faq3Que.onclick = () => {
 
 if(getComputedStyle(faq3Sub).display === 'block'){
  faq3Sub.style.display = 'none';
  faq3ArrowIcon.style.transform = 'rotate(360deg)';
  faq3ArrowIcon.style.color = 'hsl(231, 69%, 60%)';
 }
 
 else{
  faq3Sub.style.display = 'block';
  faq3ArrowIcon.style.transform = 'rotate(180deg)';
  faq3ArrowIcon.style.color = ' hsl(0, 94%, 66%)';
 }
 
}


faq4Que.onclick = () => {
 
 if(getComputedStyle(faq4Sub).display === 'block'){
  faq4Sub.style.display = 'none';
  faq4ArrowIcon.style.transform = 'rotate(360deg)';
  faq4ArrowIcon.style.color = 'hsl(231, 69%, 60%)';
 }
 
 else{
  faq4Sub.style.display = 'block';
  faq4ArrowIcon.style.transform = 'rotate(180deg)';
  faq4ArrowIcon.style.color = ' hsl(0, 94%, 66%)';
 }
 
}


// Input Error

let mailFormat = /^[A-Za-z.@0-9]+$/;

let mailChecker = () => {
 
 if(input.value.match(mailFormat)){
  errorDiv.style.backgroundColor = ' hsla(0, 94%, 66%, 0)';
  errorImage.style.display = 'none';
  errorText.textContent = "";
  input.style.caretColor = 'hsl(231, 69%, 60%)';
 }
 else{
  errorDiv.style.backgroundColor = ' hsla(0, 94%, 66%, 1)';
  errorImage.style.display = 'block';
  errorText.textContent = "Whoops, make sure it's an email";
  input.style.caretColor = 'hsla(0, 94%, 66%, 1)';
 }
 
}

