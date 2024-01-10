// Parallax bg

window.addEventListener("scroll", () => {
  document.querySelector(".banner-bg").style.backgroundSize = `${window.scrollY * 1.8 + 2000 }px`
  document.querySelector(".banner-bg h1").style.opacity = `${(-window.scrollY + 300) * .004}`
  document.querySelector(".banner-bg p").style.opacity = `${(-window.scrollY + 300) * .004}`
  document.querySelector(".banner-bg i").style.opacity = `${(-window.scrollY + 300) * .004}`
})

// bg stars

function stars() {
  let e = document.createElement("span");
  e.setAttribute("class", "star");
  document.body.appendChild(e);
  e.style.left = Math.random() * + innerWidth + "px";

  let size = Math.random() * 12;
  let duration = Math.random() * 3;

  e.style.fontSize = 12 + size + "px";
  e.style.animationDuration = 2 + duration + "s";

  setTimeout(() => {
    document.body.removeChild(e);
  }, 5000);
}

setInterval(() => {
 stars()
}, 230);

// Scroll animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
