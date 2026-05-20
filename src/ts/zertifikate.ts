interface Zertifikat {
    name: string;
    aussteller: string;
    datum: string;
    file: string;
    type: 'pdf' | 'image';
}

const zertifikate: Zertifikat[] = [
    {
         name: 'SAP Certificate',
         aussteller: 'HTL Leonding',
         datum: 'May 2025',
         file: 'pictures/cert-sap.pdf',
         type: 'pdf',
    },
];

function renderZertifikate() {
    const grid = document.getElementById('zertifikate-grid') as HTMLElement;
    if (!grid) return;
    grid.innerHTML = '';

    if (zertifikate.length === 0) {
        grid.innerHTML = `<p style="color:var(--text-tertiary);font-size:0.875rem">Noch keine Zertifikate eingetragen.</p>`;
        return;
    }

    zertifikate.forEach(cert => {
        const card = document.createElement('a');
        card.className = 'zertifikat-card fade-up';
        card.href = cert.file;
        card.target = '_blank';

        const iconSvg = cert.type === 'pdf'
            ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                 <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                 <polyline points="14 2 14 8 20 8"/>
                 <line x1="9" y1="12" x2="15" y2="12"/>
                 <line x1="9" y1="16" x2="15" y2="16"/>
               </svg>`
            : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                 <rect x="3" y="3" width="18" height="18" rx="2"/>
                 <circle cx="8.5" cy="8.5" r="1.5"/>
                 <polyline points="21 15 16 10 5 21"/>
               </svg>`;

        card.innerHTML = `
            <div class="zertifikat-icon">${iconSvg}</div>
            <h4>${cert.name}</h4>
            <span>${cert.aussteller}</span>
            <span>${cert.datum}</span>
        `;

        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderZertifikate);