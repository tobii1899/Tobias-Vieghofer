interface Skill {
    image: string;
    name: string;
    description: string;
}

interface SkillCategory {
    category: string;
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        category: "Web Development",
        skills: [
            { image: "html-logo.png",     name: "HTML",       description: "Very confident – 5 years of active use in numerous projects." },
            { image: "css-logo.png",      name: "CSS",        description: "Very confident – 5 years of experience, including responsive design and animations." },
            { image: "js-logo.png",       name: "JavaScript", description: "Solid knowledge, mostly gained through TypeScript compilation." },
            { image: "ts-logo.png",       name: "TypeScript", description: "Several years of experience – primary language for frontend projects." },
            { image: "tailwind-logo.png", name: "Tailwind",   description: "More recent experience – used productively in SimTune." },
            { image: "blazor.png",        name: "Blazor",     description: "Good knowledge gained through extensive use in my diploma project." },
            { image: "angular.png",       name: "Angular",    description: "Very strong knowledge through multiple school and personal projects, including SimTune, and as the primary framework used throughout 4th and 5th grade at HTL." },
            { image: "react.png",         name: "React",      description: "Basic knowledge gained through developing the frontend of the Trading AI project." },
        ],
    },
    {
        category: "Backend",
        skills: [
            { image: "csharp-logo.png",  name: "C#",        description: "Good knowledge gained through several years of HTL classes and personal projects." },
            { image: "python-logo.png",  name: "Python",    description: "Basic knowledge gained through school, with significantly expanded experience through personal projects." },
            { image: "java-logo.png",    name: "Java",      description: "Good knowledge gained through several years of HTL classes." },
            { image: "nodejs.png",       name: "Node.js",   description: "Strong foundation built through multiple years of HTL education." },
        ],
    },
    {
        category: "Database",
        skills: [
            { image: "sql-logo.png",   name: "SQL",                  description: "Basic SQL knowledge for queries and database design." },
            { image: "plsql-logo.png", name: "PL/SQL",               description: "Basic PL/SQL knowledge (stored procedures, triggers)." },
            { image: "postgre.png",    name: "PostgreSQL",           description: "Basic knowledge gained through school projects and database classes." },
            { image: "mongodb.png",    name: "MongoDB",              description: "Intermediate knowledge built through more than a year of use in school." },
            { image: "sqlite.png",     name: "SQLite",               description: "Frequently used during the early years of HTL for various applications." },
            { image: "mysql.png",      name: "MySQL",                description: "Learned in school and additionally applied in a personal project." },
            { image: "sqlserver.png",  name: "Microsoft SQL Server", description: "Self-taught through practical use as the preferred choice for a project." },
        ],
    },
    {
        category: "Tools & Technologies",
        skills: [
            { image: "docker.png", name: "Docker",      description: "Good knowledge gained through continuous use in school projects over the past 3 years." },
            { image: "git.png",    name: "Git",         description: "Very strong knowledge through daily use in both school and personal projects." },
            { image: "rest.png",   name: "REST",        description: "Very confident in working with REST APIs through extensive use in school projects." },
            { image: "jwt.png",    name: "JWT/Auth",    description: "Basic to intermediate knowledge acquired through implementation in several projects." },
            { image: "cicd.png",   name: "CI/CD",       description: "Practical experience with automated build and deployment workflows in various projects." },
            { image: "azure.png",  name: "Azure/AWS",   description: "Initial cloud experience gained during the early development phase of SimTune." },
            { image: "sap.png",    name: "SAP",         description: "Fundamental SAP knowledge acquired during 5th grade, supported by a certification." },
        ],
    },
];

const container = document.querySelector('.skills') as HTMLElement;

skillCategories.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('skill-category', 'fade-up');
    categoryDiv.innerHTML = `<h3>${category.category}</h3>`;

    const skillsDiv = document.createElement('div');
    skillsDiv.classList.add('skills-grid');

    category.skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');

        skillDiv.innerHTML = `
            <img src="pictures/${skill.image}" alt="${skill.name}">
            <p>${skill.name}</p>
            <span class="tooltip">${skill.description}</span>
        `;

        skillsDiv.appendChild(skillDiv);
    });

    categoryDiv.appendChild(skillsDiv);
    container?.appendChild(categoryDiv);
});