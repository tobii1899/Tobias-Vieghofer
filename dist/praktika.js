"use strict";
const praktika = [
    {
        company: 'ÖBB',
        logo: 'pictures/oebb.png',
        role: 'Software Development Intern',
        zeitraum: 'Summer 2023',
        ort: 'Linz, Austria',
        beschreibung: 'Internship at the Austrian Federal Railways with a focus on software development. Gained insight into the professional development workflow of a large company — from agile processes to internal tooling projects.',
    },
    {
        company: 'jobs.at',
        logo: 'pictures/jobsat.png',
        role: 'Software Development Intern',
        zeitraum: 'Summer 2024',
        ort: 'Linz, Austria',
        beschreibung: 'Internship at jobs.at, one of the leading job platforms in Austria. Contributed to web development projects, collaborated closely with the development team, and gained insight into modern web technologies and agile software development.',
    },
    {
        company: 'KPMG',
        logo: 'pictures/kpmg.png',
        role: 'Diploma Thesis Partner – Data Analysis',
        zeitraum: 'Summer 2025',
        ort: 'Linz, Austria',
        beschreibung: 'Diploma project in cooperation with KPMG in the field of synthetic data generation for AI training. Responsible for analyzing real sensitive datasets, which served as the basis for the Synthesis team to generate synthetic training data.',
    },
];
function renderPraktika() {
    const list = document.getElementById('praktika-list');
    if (!list)
        return;
    praktika.forEach(p => {
        const card = document.createElement('div');
        card.className = 'praktika-card fade-up';
        const logoHtml = p.logo
            ? `<img src="${p.logo}" alt="${p.company}" class="praktika-logo">`
            : `<div class="praktika-logo-placeholder">${p.company.charAt(0)}</div>`;
        card.innerHTML = `
            ${logoHtml}
            <div class="praktika-info">
                <h3>${p.company} – ${p.role}</h3>
                <div class="praktika-meta">
                    <span>📅 ${p.zeitraum}</span>
                    <span>📍 ${p.ort}</span>
                </div>
                <p>${p.beschreibung}</p>
            </div>
        `;
        list.appendChild(card);
    });
}
document.addEventListener('DOMContentLoaded', renderPraktika);
