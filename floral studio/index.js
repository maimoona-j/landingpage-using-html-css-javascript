// Smooth scrolling for anchor links
const smoothScroll = (target) => {
  const element = document.querySelector(target);
  window.scrollTo({
    top: element.offsetTop,
    behavior: "smooth",
  });
};

document.addEventListener("DOMContentLoaded", () => {
  // Get all anchor links with the class 'nav-links'
  const navLinks = document.querySelectorAll(".nav-links a");

  // Attach click event listeners to each anchor link
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("href");
      smoothScroll(target);
    });
  });
});
