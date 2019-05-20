const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.home-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight*.919) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

initUpdateNavbarOnScroll();
