const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.09 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.site-nav a')];

const sectionObserver = new IntersectionObserver(entries => {
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`);
  });
}, { rootMargin: '-25% 0px -60% 0px', threshold: [0.05, 0.25, 0.5] });

sections.forEach(section => sectionObserver.observe(section));

const lightbox = document.querySelector('#image-lightbox');

if (lightbox) {
  const lightboxImage = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('figcaption');
  const closeButton = lightbox.querySelector('.lightbox-close');

  document.querySelectorAll('.image-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const sourceImage = link.querySelector('img');
      const figure = link.closest('figure');
      const caption = figure?.querySelector('figcaption strong')?.textContent?.trim() || '';

      lightboxImage.src = link.getAttribute('href');
      lightboxImage.alt = sourceImage?.alt || '';
      lightboxCaption.textContent = caption;
      lightbox.showModal();
    });
  });

  const closeLightbox = () => lightbox.close();
  closeButton.addEventListener('click', closeLightbox);
  lightboxImage.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) closeLightbox();
  });
}
