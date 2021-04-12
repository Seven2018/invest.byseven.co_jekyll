const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-seven');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight*.90) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

initUpdateNavbarOnScroll();
