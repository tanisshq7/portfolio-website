// 3D Hero Effect
document.addEventListener('mousemove', (e) => {
  const hero = document.querySelector('.hero-content');
  let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 40;
  hero.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Reset
document.addEventListener('mouseleave', () => {
  const hero = document.querySelector('.hero-content');
  hero.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// Scroll reveal animations
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 150) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();

