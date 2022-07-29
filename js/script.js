// Set Current Year

const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();


// Mobile Navigation

const btnNavEl = document.querySelector('.btn-mobile-nav');

const headerEl = document.querySelector('.header');


btnNavEl.addEventListener('click', 
() => headerEl.classList.toggle("nav-open")
);
("nav-open");
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