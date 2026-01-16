/* ===================== READY ===================== */
document.addEventListener("DOMContentLoaded", () => {

  /* ===================== SCROLL REVEAL ===================== */

  const revealElements = document.querySelectorAll(
    "section, .project-hero, .project-text, .info-block"
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -60px 0px"
    }
  );

  revealElements.forEach(el => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });

  /* ===================== HERO ENTRANCE ===================== */

  const hero = document.querySelector(".hero-content");
  if (hero) {
    requestAnimationFrame(() => {
      hero.classList.add("hero-active");
    });
  }

  /* ===================== HEADER SCROLL ===================== */

  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });

  /* ===================== CARD MICRO INTERACTION ===================== */

  const cards = document.querySelectorAll(".info-block, .project-hero");

  cards.forEach(card => {
    let rafId = null;

    card.addEventListener("mousemove", (e) => {
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -4;
        const rotateY = ((x / rect.width) - 0.5) * 4;

        card.style.transform = `
          perspective(900px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-3px)
        `;
      });
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `
        perspective(900px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0)
      `;
    });
  });

  /* ================= DIVIDER SCROLL ANIMATION ================= */

  const dividers = document.querySelectorAll(".project-divider");

  const dividerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          dividerObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.4
    }
  );

  dividers.forEach(divider => dividerObserver.observe(divider));

});
