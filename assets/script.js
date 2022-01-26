// set sticky navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('sticky', window.scrollY > 0);
});

// toggle menu
function toggleMenu() {
  const menuToggle = document.querySelector('.menuToggle');
  menuToggle.classList.toggle('active');

  const navigation = document.querySelector('.navbar .navigation');
  navigation.classList.toggle('active');
}
