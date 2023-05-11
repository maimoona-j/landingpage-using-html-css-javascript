const container = document.querySelector(".container");
const infosecond = document.querySelector(".info-second");
const infofirst = document.querySelector(".info-first");

const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseenter", () => {
  container.classList.add("active-left");
  infofirst.style.display = "block";
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("active-left");
  infofirst.style.display = "none";
});

right.addEventListener("mouseenter", () => {
  container.classList.add("active-right");
  infosecond.style.display = "block";
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("active-right");
  infosecond.style.display = "none";
});
