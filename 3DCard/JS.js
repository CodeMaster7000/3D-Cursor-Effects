const card = document.querySelector('.card')
document.addEventListener('mousemove', function(e) {
  let x = (window.innerWidth / 2 - e.pageX) / -5;
  let y = (window.innerHeight / 2 - e.pageY) / 5;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
