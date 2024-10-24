document.addEventListener('DOMContentLoaded', function() { 
  // Overlay config
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  // Scroll-to-top button config
  const scrollTopButton = document.createElement('button');
  scrollTopButton.className = 'scroll-top-button';
  scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(scrollTopButton);

  // Get all necessary elements
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  const logo = document.querySelector('.logo');

  // Function to close sidebar
  const closeSidebar = () => {
    mobileMenu.classList.remove('active');
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  // Function to open sidebar
  const openSidebar = () => {
    mobileMenu.classList.add('active');
    navLinks.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Logo click event
  logo.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active')) {
      e.preventDefault();
      closeSidebar();
    }
  });

  // Mobile menu toggle
  mobileMenu.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  // Overlay click handler
  overlay.addEventListener('click', closeSidebar);

  // Nav links click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeSidebar);
  });

  // Scroll effect for header
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      scrollTopButton.classList.add('visible');
    } else {
      header.style.boxShadow = 'none';
      scrollTopButton.classList.remove('visible');
    }
  });

  // Scroll to top functionality
  scrollTopButton.addEventListener('click', () => {
    document.querySelector('#hero').scrollIntoView({
      behavior: 'smooth'
    });
  });

  // Close sidebar on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeSidebar();
    }
  });
});