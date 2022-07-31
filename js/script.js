// Set Current Year

const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();


// Mobile Navigation

const btnNavEl = document.querySelector('.btn-mobile-nav');

const headerEl = document.querySelector('.header');


btnNavEl.addEventListener('click', 
() => headerEl.classList.toggle("nav-open")
);


///////////////////////////////////////////////////////////
// Smooth Scrolling Animation

const allLinks = document.querySelectorAll('a');

allLinks.forEach(function(link){
  link.addEventListener('click', function (e) {
    e.preventDefault(); //Reset the lik element to do nothing (no scrolling)

    const href = link.getAttribute('href');
    
    //Scroll Back to top
    if(href == "#"){
      window.scrollTo({
        top:0,
        behavior: 'smooth',
      });
    }

    //Scroll to other links
    if(href !== "#" && href.startsWith('#')){
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({behavior:"smooth"});
    }

    //Close mobile navigation
    if(link.classList.contains("main-nav-link")){
      headerEl.classList.toggle("nav-open");
    }
  });
})


///////////////////////////////////////////////////////////
// Sticky Navigation Animation

const sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(
  function(entries){
    const ent = entries[0];
    console.log(ent);

    if(!ent.isIntersecting){
      document.body.classList.add('sticky');
    }
    else{
      document.body.classList.remove('sticky');
    }
  }, 
  {
    root: null, //null means the viewport
    threshold: 0,
    rootMargin: '-80px'
  });
obs.observe(sectionHeroEl);


///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
