/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navBarList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(){
  const fr = document.createDocumentFragment();
  for (let sec of sections) {
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      //no need for the href attribute.
      anchor.className = "menu__link";
      anchor.setAttribute('data-id', sec.id);
      anchor.textContent = sec.getAttribute('data-nav');
      li.appendChild(anchor);
      fr.appendChild(li);
  }
  navBarList.appendChild(fr);
}
buildNav();
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scroll(evt) {
  const link = evt.target;
  if (link.nodeName == 'A') {
      evt.preventDefault();
      const e = document.getElementById(link.getAttribute('data-id'));
      e.scrollIntoView({behavior:"smooth" , block: 'center'});
  }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// Scroll to section on link click
navBarList.addEventListener('click', scroll);
//smooth scrolling
document.getElementById('navbar__list').addEventListener('click', function (e) { e.preventDefault();
  const target = e.target;
  if (target.classList.contains('menu__link')) {
      const id = target.getAttribute('href').slice(1);
      document.getElementById(id).scrollIntoView({ behavior: 'smooth'});
  }
});
// Set sections as active
window.addEventListener("scroll", scrollHandler);

          
