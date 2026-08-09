/* ============================================
   UBian Journey — Interactive Script
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Header scroll effect ----
  const header = document.getElementById('header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- Mobile nav ----
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    navToggle.classList.toggle('open');
  });
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.classList.remove('open');
    });
  });

  // ---- Active nav link on scroll ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const observerNav = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  );
  sections.forEach(s => observerNav.observe(s));

  // ---- Scroll-in animations ----
  const animObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('[data-animate]').forEach(el => animObserver.observe(el));

  // ---- Carousels ----
  document.querySelectorAll('[data-carousel]').forEach(wrapper => {
    const track = wrapper.querySelector('.carousel-track');
    const prevBtn = wrapper.querySelector('.prev');
    const nextBtn = wrapper.querySelector('.next');
    const cards = track.querySelectorAll('.polaroid-card');
    const dotsContainer = wrapper.parentElement.querySelector('.carousel-dots');

    if (!cards.length) return;

    // Dots
    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      if (i === 0) dot.classList.add('active');
      dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll('button');

    // Find which card is closest to the center of the track
    const getActiveIndex = () => {
      const trackRect = track.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;
      let closestIdx = 0;
      let closestDist = Infinity;

      cards.forEach((card, i) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const dist = Math.abs(cardCenter - trackCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      });
      return closestIdx;
    };

    const scrollToCard = (index) => {
      const card = cards[Math.max(0, Math.min(cards.length - 1, index))];
      if (!card) return;
      const trackRect = track.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      // Calculate how much we need to scroll so the card is centered
      const offset = (cardRect.left - trackRect.left) - (trackRect.width / 2 - cardRect.width / 2);
      track.scrollBy({ left: offset, behavior: 'smooth' });
    };

    // Dot click
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => scrollToCard(i));
    });

    const updateButtons = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      prevBtn.disabled = track.scrollLeft <= 8;
      nextBtn.disabled = track.scrollLeft >= maxScroll - 8;

      // Active dot — always based on the card nearest to center
      const idx = getActiveIndex();
      dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    };

    prevBtn.addEventListener('click', () => {
      scrollToCard(getActiveIndex() - 1);
    });
    nextBtn.addEventListener('click', () => {
      scrollToCard(getActiveIndex() + 1);
    });

    track.addEventListener('scroll', () => requestAnimationFrame(updateButtons), { passive: true });
    updateButtons();
    window.addEventListener('resize', updateButtons);
  });

  // ---- Lightbox ----
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxClose = document.getElementById('lightboxClose');

  const openLightbox = (src, title, desc) => {
    lightboxImg.src = src;
    lightboxImg.alt = title;
    lightboxTitle.textContent = title;
    lightboxDesc.textContent = desc;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // Clear after transition
    setTimeout(() => {
      lightboxImg.src = '';
    }, 300);
  };

  document.querySelectorAll('.polaroid-card').forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.dataset.fulltitle || card.querySelector('.polaroid-title')?.textContent || '';
      const desc = card.dataset.desc || '';
      if (img) openLightbox(img.src, title, desc);
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });

  // ---- Image error handling (clear feedback when missing) ----
  document.querySelectorAll('.polaroid-frame img').forEach(img => {
    img.addEventListener('error', function () {
      this.style.display = 'none';
      const frame = this.parentElement;
      if (!frame.querySelector('.img-fallback')) {
        const fallback = document.createElement('div');
        fallback.className = 'img-fallback';
        fallback.style.cssText = `
          position:absolute;inset:0;display:flex;flex-direction:column;
          align-items:center;justify-content:center;background:linear-gradient(145deg,#b3e5fc,#e0f7fa);
          color:#006064;font-size:0.85rem;text-align:center;padding:1rem;gap:0.4rem;
        `;
        fallback.innerHTML = `
          <span style="font-size:1.8rem">📷</span>
          <span>Image pending</span>
          <span style="font-size:0.75rem;opacity:0.7">Place file in /images/</span>
        `;
        frame.appendChild(fallback);
      }
    });
  });

  // ---- Extra interactivity: keyboard arrows for carousel when focused ----
  document.querySelectorAll('[data-carousel]').forEach(wrapper => {
    wrapper.setAttribute('tabindex', '0');
    wrapper.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') {
        wrapper.querySelector('.prev')?.click();
      } else if (e.key === 'ArrowRight') {
        wrapper.querySelector('.next')?.click();
      }
    });
  });

  // ---- Subtle parallax on orbs ----
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelectorAll('.orb').forEach((orb, i) => {
      const speed = (i + 1) * 0.03;
      orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
  }, { passive: true });
});
