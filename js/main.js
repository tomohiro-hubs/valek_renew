/* ============================================
   VALEK – Professional Interaction Layer
   ============================================ */

(() => {
    'use strict';

    // ─── Scroll Progress Bar ───
    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    document.body.prepend(progress);

    // ─── Header Scroll State ───
    const header = document.querySelector('.header');

    const updateScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progress.style.width = scrollPercent + '%';

        if (header) {
            header.classList.toggle('scrolled', scrollTop > 50);
        }
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();

    // ─── Hamburger Menu ───
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });

        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ─── Intersection Observer – Fade In ───
    const fadeElements = document.querySelectorAll('[data-fade]');
    const staggerContainers = document.querySelectorAll('[data-stagger]');

    const fadeObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        },
        { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
    );

    fadeElements.forEach(el => fadeObserver.observe(el));

    // Stagger children
    const staggerObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const children = entry.target.querySelectorAll('[data-fade]');
                    children.forEach((child, i) => {
                        child.style.transitionDelay = `${i * 100}ms`;
                        child.classList.add('is-visible');
                    });
                    staggerObserver.unobserve(entry.target);
                }
            });
        },
        { rootMargin: '0px 0px -60px 0px', threshold: 0.05 }
    );

    staggerContainers.forEach(el => staggerObserver.observe(el));

    // ─── Counter Animation ───
    const counters = document.querySelectorAll('[data-count]');
    const countObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    countObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    counters.forEach(el => countObserver.observe(el));

    function animateCount(el) {
        const target = parseFloat(el.dataset.count);
        const decimals = (target.toString().split('.')[1] || '').length;
        const duration = 2000;
        const start = performance.now();

        const step = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quart
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = eased * target;
            el.textContent = current.toFixed(decimals);
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }

    // ─── Smooth Scroll ───
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const top = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ─── Parallax subtle on hero orbs ───
    const orbs = document.querySelectorAll('.hero-orb');
    if (orbs.length) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            orbs.forEach((orb, i) => {
                const speed = (i + 1) * 8;
                orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        }, { passive: true });
    }

})();