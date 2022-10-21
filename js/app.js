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


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

//smooth scrolling
document.getElementById('navbar__list').addEventListener('click', function (e) {
  e.preventDefault();
  const target = e.target;
  if (target.classList.contains('menu__link')) {
      const id = target.getAttribute('href').slice(1);
      document.getElementById(id).scrollIntoView({ behavior: 'smooth',block: "center" });
  }
});
// Set sections as active
//var a = document.querySelectorAll("#navbar__list a");
       //   for (var i = 0, length = a.length; i < length; i++) {
        //    a[i].onclick = function() {
         //     var b = document.querySelector("navbar__list li.menu__link");
         //     if (b) b.classList.remove("active");
         //     this.parentNode.classList.add('active');
         //   };
         
         // }

          