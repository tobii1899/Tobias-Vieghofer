document.addEventListener('DOMContentLoaded', () => {
    const navbar  = document.getElementById('navbar') as HTMLElement;
    const navLinks = Array.from(document.querySelectorAll('.navbar ul li a')) as HTMLAnchorElement[];
    const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
    const fadeEls  = Array.from(document.querySelectorAll('.fade-up')) as HTMLElement[];

    function onScroll() {
        navbar.classList.toggle('scrolled', window.scrollY > 8);

        let current = '';
        sections.forEach(sec => {
            const top = sec.getBoundingClientRect().top;
            if (top <= 80) current = sec.id;
        });

        navLinks.forEach(a => {
            const href = a.getAttribute('href')?.replace('#', '') ?? '';
            a.classList.toggle('active', href === current);
        });
    }

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                (entry.target as HTMLElement).classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    fadeEls.forEach(el => io.observe(el));

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
});