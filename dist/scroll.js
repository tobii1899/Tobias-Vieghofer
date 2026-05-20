"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navLinks = Array.from(document.querySelectorAll('.navbar ul li a'));
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const fadeEls = Array.from(document.querySelectorAll('.fade-up'));
    function onScroll() {
        navbar.classList.toggle('scrolled', window.scrollY > 8);
        let current = '';
        sections.forEach(sec => {
            const top = sec.getBoundingClientRect().top;
            if (top <= 80)
                current = sec.id;
        });
        navLinks.forEach(a => {
            var _a, _b;
            const href = (_b = (_a = a.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.replace('#', '')) !== null && _b !== void 0 ? _b : '';
            a.classList.toggle('active', href === current);
        });
    }
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    fadeEls.forEach(el => io.observe(el));
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
});
