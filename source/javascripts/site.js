window.addEventListener("scroll", () => {
  document.querySelector(".banner-bg").style.backgroundSize = `${window.scrollY * 1.8 + 1600 }px`
  document.querySelector(".banner-bg h1").style.opacity = `${(-window.scrollY + 300) * .004}`
  document.querySelector(".banner-bg p").style.opacity = `${(-window.scrollY + 300) * .004}`
  document.querySelector(".banner-bg i").style.opacity = `${(-window.scrollY + 300) * .004}`
})
