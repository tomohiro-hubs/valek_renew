/* ============================================
   VALEK – Professional Interaction Layer
   ============================================ */

(() => {
    'use strict';

    const env = {
        reduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        finePointer: window.matchMedia('(hover: hover) and (pointer: fine)').matches,
    };

    initScrollProgress();
    initCustomCursor(env);
    initMobileMenu();
    initBackToTop(env);
    initFadeAnimations(env);
    initCounters();
    initSmoothScroll();
    initHeroParallax(env);
    initVoiceSlider();

    function initScrollProgress() {
        const progress = document.createElement('div');
        progress.className = 'scroll-progress';
        document.body.prepend(progress);

        const header = document.querySelector('.header');

        const updateScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            progress.style.width = `${scrollPercent}%`;
            if (header) {
                header.classList.toggle('scrolled', scrollTop > 50);
            }
        };

        window.addEventListener('scroll', updateScroll, { passive: true });
        updateScroll();
    }

    function initCustomCursor({ finePointer }) {
        if (!finePointer) return;

        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.append(cursor);
        document.body.classList.add('custom-cursor-enabled');

        const hoverSelector = 'a, button, .btn, input, select, textarea, label, [role="button"]';

        window.addEventListener('mousemove', (event) => {
            cursor.style.left = `${event.clientX}px`;
            cursor.style.top = `${event.clientY}px`;
            cursor.classList.add('is-active');

            if (event.target.closest(hoverSelector)) {
                cursor.classList.add('is-hover');
            } else {
                cursor.classList.remove('is-hover');
            }
        }, { passive: true });

        document.addEventListener('mouseleave', () => {
            cursor.classList.remove('is-active', 'is-hover');
        });
    }

    function initMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const mobileNav = document.getElementById('mobileNav');
        if (!hamburger || !mobileNav) return;

        const closeMenu = () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        };

        const toggleMenu = () => {
            const active = mobileNav.classList.toggle('active');
            hamburger.classList.toggle('active', active);
            hamburger.setAttribute('aria-expanded', active ? 'true' : 'false');
            document.body.style.overflow = active ? 'hidden' : '';
        };

        hamburger.addEventListener('click', toggleMenu);

        mobileNav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && mobileNav.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    function initBackToTop({ reduceMotion }) {
        const button = document.createElement('button');
        button.className = 'back-to-top';
        button.type = 'button';
        button.setAttribute('aria-label', 'ページの先頭へ戻る');
        button.innerHTML = '<span aria-hidden=\"true\">↑</span>';
        document.body.append(button);

        const updateVisibility = () => {
            button.classList.toggle('is-visible', window.scrollY > 320);
        };

        window.addEventListener('scroll', updateVisibility, { passive: true });
        updateVisibility();

        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
        });
    }

    function initFadeAnimations({ reduceMotion }) {
        const fadeElements = document.querySelectorAll('[data-fade]');
        const staggerContainers = document.querySelectorAll('[data-stagger]');

        if (reduceMotion || !('IntersectionObserver' in window)) {
            fadeElements.forEach((el) => el.classList.add('is-visible'));
            return;
        }

        const fadeObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-visible');
                    fadeObserver.unobserve(entry.target);
                });
            },
            { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
        );

        fadeElements.forEach((el) => fadeObserver.observe(el));

        const staggerObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const children = entry.target.querySelectorAll('[data-fade]');
                    children.forEach((child, i) => {
                        child.style.transitionDelay = `${i * 80}ms`;
                        child.classList.add('is-visible');
                    });
                    staggerObserver.unobserve(entry.target);
                });
            },
            { rootMargin: '0px 0px -60px 0px', threshold: 0.05 }
        );

        staggerContainers.forEach((el) => staggerObserver.observe(el));
    }

    function initCounters() {
        const counters = document.querySelectorAll('[data-count]');
        if (!counters.length) return;

        if (!('IntersectionObserver' in window)) {
            counters.forEach(animateCount);
            return;
        }

        const countObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    animateCount(entry.target);
                    countObserver.unobserve(entry.target);
                });
            },
            { threshold: 0.5 }
        );

        counters.forEach((el) => countObserver.observe(el));
    }

    function animateCount(el) {
        const target = parseFloat(el.dataset.count);
        const decimals = (target.toString().split('.')[1] || '').length;
        const duration = 2000;
        const start = performance.now();

        const step = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = eased * target;

            el.textContent = current.toFixed(decimals);
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }

    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);
                if (!target) return;

                const top = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: 'smooth' });
            });
        });
    }

    function initHeroParallax({ reduceMotion, finePointer }) {
        const orbs = document.querySelectorAll('.hero-orb');
        if (!orbs.length || reduceMotion || !finePointer) return;

        let rafId = null;
        let pointerX = 0;
        let pointerY = 0;

        const updateOrbs = () => {
            const x = (pointerX / window.innerWidth - 0.5) * 2;
            const y = (pointerY / window.innerHeight - 0.5) * 2;
            orbs.forEach((orb, i) => {
                const speed = (i + 1) * 5;
                orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
            rafId = null;
        };

        window.addEventListener('mousemove', (e) => {
            pointerX = e.clientX;
            pointerY = e.clientY;
            if (!rafId) rafId = requestAnimationFrame(updateOrbs);
        }, { passive: true });
    }

    function initVoiceSlider() {
        const voiceTrack = document.getElementById('voiceSlider');
        const voicePrev = document.querySelector('[data-voice-prev]');
        const voiceNext = document.querySelector('[data-voice-next]');
        if (!voiceTrack || !voicePrev || !voiceNext) return;

        const getStep = () => {
            const firstCard = voiceTrack.querySelector('.voice-card');
            if (!firstCard) return 320;

            const cardWidth = firstCard.getBoundingClientRect().width;
            const styles = window.getComputedStyle(voiceTrack);
            const gap = parseFloat(styles.columnGap || styles.gap || '16');
            return cardWidth + gap;
        };

        const updateNavState = () => {
            const maxScroll = Math.max(0, voiceTrack.scrollWidth - voiceTrack.clientWidth);
            voicePrev.disabled = voiceTrack.scrollLeft <= 4;
            voiceNext.disabled = voiceTrack.scrollLeft >= maxScroll - 4;
        };

        voicePrev.addEventListener('click', () => {
            voiceTrack.scrollBy({ left: -getStep(), behavior: 'smooth' });
        });

        voiceNext.addEventListener('click', () => {
            voiceTrack.scrollBy({ left: getStep(), behavior: 'smooth' });
        });

        voiceTrack.addEventListener('scroll', updateNavState, { passive: true });
        window.addEventListener('resize', updateNavState);
        updateNavState();
    }
})();
