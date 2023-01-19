/* DARK LIGHT THEME*/
let darkTheme;
const htmlTag = document.documentElement;
const themeButton = document.getElementById("theme-button");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

function setThemeMode(darkTheme) {
  if (darkTheme) {
    htmlTag.setAttribute("theme-mode", "dark");
    moonIcon.classList.add("hide");
    sunIcon.classList.remove("hide");
    localStorage.setItem("theme-mode", "dark");
  } else {
    htmlTag.setAttribute("theme-mode", "light");
    moonIcon.classList.remove("hide");
    sunIcon.classList.add("hide");
    localStorage.setItem("theme-mode", "light");
  }
}

function checkUserPreference() {
  return (
    localStorage.getItem("theme-mode") === "dark" ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches &&
      !localStorage.getItem("theme-mode"))
  );
}

function toggleDarkTheme(darkTheme) {
  return !darkTheme;
}

darkTheme = checkUserPreference();
setThemeMode(darkTheme);

themeButton.addEventListener("click", () => {
  darkTheme = toggleDarkTheme(darkTheme);
  setThemeMode(darkTheme);
});

/* SHOW MENU */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav_link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

/* SHOW ARROW FOR SCROLL TOP */
const scrollTop = document.getElementById("scroll-top");

function scrollToTop() {
  /* When the scroll reaches the profile section show arrow*/
  if (this.scrollY < 578) {
    scrollTop.classList.add("hide");
  } else {
    scrollTop.classList.remove("hide");
  }
}

window.addEventListener("scroll", scrollToTop);
