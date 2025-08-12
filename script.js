// 3D Tilt Effect for Hero Section
document.addEventListener('mousemove', (e) => {
  const hero = document.querySelector('.hero-content');
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  hero.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Reset tilt on mouse leave
document.addEventListener('mouseleave', () => {
  const hero = document.querySelector('.hero-content');
  hero.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
