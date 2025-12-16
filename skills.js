var lightIconSkills = ["Blazor", "MVC / MVVM"];

var skillCategories = [
    {
        category: "Web Development",
        skills: [
            { image: "html-logo.png", name: "HTML", description: "I'm very good at HTML because I've been doing it for 5 years" },
            { image: "css-logo.png", name: "CSS", description: "I have also been using CSS for 5 years and am therefore very good" },
            { image: "js-logo.png", name: "JavaScript", description: "I actually only converted javascript (with tsc from typescript), but it is very similar to js so I can do it really well" },
            { image: "ts-logo.png", name: "TypeScript", description: "I'm also very good at typescript because we've used it for several years" },
            { image: "blazor.png", name: "Blazor", description: "During my diploma thesis at KPMG, I worked with Blazor." },
            { image: "tailwind-logo.png", name: "Tailwind", description: "I've only been using Tailwind for a short time and I'm actually very good with it (my project SimTune uses tailwind)" },
        ],
    },
    {
        category: "Backend",
        skills: [
            { image: "csharp-logo.png", name: "C#", description: "We started C# again a year ago, but had it continuously for the first 2 years, so I'm very good at it too." },
            { image: "python-logo.png", name: "Python", description: "We've only been using Python (in artificial intelligence) for a year. I'm not that advanced here yet, but I know the basics" },
            { image: "java-logo.png", name: "Java", description: "We also did Java for a long time and I'm good at it too." },
        ],
    },
    {
        category: "Database",
        skills: [
            { image: "sql-logo.png", name: "SQL", description: "I can do the basics of SQL, but I have to learn everything else" },
            { image: "plsql-logo.png", name: "PL/SQL", description: "same as sql" },
            { image: "mongodb.png", name: "MongoDB", description: "I worked with MongoDB for one year and successfully completed a major exam, giving me a good practical understanding of document-based databases." },
            { image: "apex.png", name: "Apex", description: "I worked with Apex for one year, but since it did not particularly interest me, my knowledge is limited to the basics." },
            { image: "sap.png", name: "SAP", description: "I started working with SAP in my fifth year. While it is not my preferred technology, I can use it competently at a basic level." },
            { image: "postgre.png", name: "PostgreSQL", description: "I worked with PostgreSQL for half a semester and have a solid understanding of its fundamentals." },
            { image: "sqlite.png", name: "SQLite", description: "I frequently used SQLite during my second and third years at HTL, gaining practical experience with lightweight relational databases." },
        ],
    },
        {
        category: "Concepts & Architecture",
        skills: [
            { image: "rest.png", name: "REST APIs", description: "I have extensive experience working with RESTful APIs, especially in web computing projects at school." },
            { image: "jwt.png", name: "JWT Authentication", description: "I implemented JWT-based authentication in the SimTune project and have a good understanding of how token-based authentication works." },
            { image: "client-server.png", name: "Client–Server Architecture", description: "I understand the client–server model and how frontend and backend components communicate in modern web applications." },
            { image: "architecture.png", name: "Basic Software Architecture", description: "I have a basic understanding of software architecture principles and how applications are structured and organized." },
            { image: "mvc-mvvm.png", name: "MVC / MVVM", description: "MVC and MVVM were major topics in my second and fourth years, giving me a solid understanding of these architectural patterns." },
        ],
    },
];

var container = document.querySelector('.skills');
skillCategories.forEach(function (category) {
    var categoryDiv = document.createElement('div');
    categoryDiv.classList.add('skill-category');
    categoryDiv.innerHTML = "<h2>".concat(category.category, "</h2>");
    var skillsDiv = document.createElement('div');
    skillsDiv.classList.add('skills-grid');
    category.skills.forEach(function (skill, index) {
        var isLightIcon = lightIconSkills.includes(skill.name); 
        debugger;
        var skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');
        skillDiv.innerHTML = `
            <div class="skill-icon ${isLightIcon ? "light-icon" : ""}">
                <img src="pictures/${skill.image}" alt="${skill.name}">
            </div>
            <p>${skill.name}</p>
            <span class="tooltip">${skill.description}</span>
        `;
        skillsDiv.appendChild(skillDiv);
    });
    categoryDiv.appendChild(skillsDiv);
    container.appendChild(categoryDiv);
});
