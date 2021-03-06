/*===== MENU SHOW =====*/
const toggleIcon = () => {
  const icon = document.querySelector("#nav-toggle ion-icon");
  let newName = icon.getAttribute("name");

  newName = newName === "menu-outline" ? "close-outline" : "menu-outline";
  icon.setAttribute("name", newName);
};

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
      toggleIcon();
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
  toggleIcon();
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  // reset: true
});

// /*SCROLL HOME*/
// sr.reveal(".home__title", {});
// sr.reveal(".home__scroll", { delay: 200 });
// sr.reveal(".home__img", { origin: "right", delay: 400 });

// /*SCROLL ABOUT*/
// sr.reveal(".about__img", { delay: 500 });
// sr.reveal(".about__subtitle", { delay: 300 });
// sr.reveal(".about__profession", { delay: 400 });
// sr.reveal(".about__text", { delay: 500 });

// /*SCROLL SKILLS*/
// sr.reveal(".skills__subtitle", {});
// sr.reveal(".skills__name", { distance: "20px", delay: 50, interval: 100 });
// sr.reveal(".skills__img", { delay: 400 });

// /*SCROLL PORTFOLIO*/
// sr.reveal(".portfolio__img", { interval: 200 });

// /*SCROLL CONTACT*/
// sr.reveal(".contact__subtitle", {});
// sr.reveal(".contact__text", { interval: 200 });
// sr.reveal(".contact__input", { delay: 400 });
// sr.reveal(".contact__button", { delay: 600 });
// sr.reveal(".footer__social-icon", { delay: 600, interval: 200 });

/*SCROLL HOME*/
sr.reveal(".home__title", {});
sr.reveal(".home__scroll", { delay: 100 });
sr.reveal(".home__img", { origin: "right", delay: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about__img", { delay: 250 });
sr.reveal(".about__subtitle", { delay: 150 });
sr.reveal(".about__profession", { delay: 200 });
sr.reveal(".about__text", { delay: 250 });

/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__name", { distance: "20px", delay: 25, interval: 50 });
sr.reveal(".skills__img", { delay: 200 });

/*SCROLL PORTFOLIO*/
sr.reveal(".portfolio__img", { interval: 100 });

/*SCROLL CONTACT*/
sr.reveal(".contact__subtitle", {});
sr.reveal(".contact__text", { interval: 100 });
sr.reveal(".contact__input", { delay: 200 });
sr.reveal(".contact__button", { delay: 300 });
sr.reveal(".footer__social-icon", { delay: 300, interval: 100 });

/*===== FIX HEADER BACKGROUND COLOR =====*/
let viewportWidth = window.innerWidth;
console.log(viewportWidth);

const sectionHomeEl = document.querySelector(".home");

if (viewportWidth < 768) {
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      console.log(ent);

      if (ent.isIntersecting === false) {
        //   document.body.classList.add("sticky");
        console.log("out");
        document.querySelector(".l-header").classList.add("bg-color");
      }

      if (ent.isIntersecting === true) {
        console.log("in");
        document.querySelector(".l-header").classList.remove("bg-color");
      }
    },
    {
      // in the viewport
      root: null,
      threshold: 0,
      rootMargin: "-48px",
    }
  );
  obs.observe(sectionHomeEl);
} else {
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      console.log(ent);

      if (ent.isIntersecting === false) {
        //   document.body.classList.add("sticky");
        console.log("out");
        document.querySelector(".l-header").classList.add("bg-color");
      }

      if (ent.isIntersecting === true) {
        console.log("in");
        document.querySelector(".l-header").classList.remove("bg-color");
      }
    },
    {
      // in the viewport
      root: null,
      threshold: 0,
      rootMargin: "-64px",
    }
  );
  obs.observe(sectionHomeEl);
}

/*===== GET CURRENT YEAR =====*/
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/*===== IMPLEMENT SMOOT SCROLLING IN ALL BROWSERS =====*/
const allLinks = document.querySelectorAll(".select-link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
