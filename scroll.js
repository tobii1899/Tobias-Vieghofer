const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.01,
        rootMargin: "0px 0px -50px 0px"
    }
);

sections.forEach(section => observer.observe(section));
