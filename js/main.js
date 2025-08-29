
const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


const filterButtons = document.querySelectorAll('.filter-btn');
const packageCards = document.querySelectorAll('.package-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    packageCards.forEach(card => {
      if(filter === 'all' || card.dataset.category === filter){
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});




const fadeSections = document.querySelectorAll('.fade-section');
window.addEventListener('scroll', () => {
  fadeSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; 
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
