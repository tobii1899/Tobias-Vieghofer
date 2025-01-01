var skillCategories = [
    {
        category: "Web Development",
        skills: [
            { image: "html-logo.png", name: "HTML", description: "I'm very good at HTML because I've been doing it for 4 years" },
            { image: "css-logo.png", name: "CSS", description: "I have also been using CSS for 4 years and am therefore very good" },
            { image: "js-logo.png", name: "JavaScript", description: "I actually only converted javascript (with tsc from typescript), but it is very similar to js so I can do it really well" },
            { image: "ts-logo.png", name: "TypeScript", description: "I'm also very good at typescript because we've used it for several years" },
            { image: "tailwind-logo.png", name: "Tailwind", description: "I've only been using Tailwind for a short time and I'm actually very good with it (my project SimTune uses tailwind)" },
        ],
    },
    {
        category: "Backend",
        skills: [
            { image: "csharp-logo.png", name: "C#", description: "We recently started C# again, but had it continuously for the first 2 years, so I'm very good at it too" },
            { image: "python-logo.png", name: "Python", description: "We've only been using Python (in artificial intelligence) for a few months. I'm not that advanced here yet, but I know the basics" },
            { image: "java-logo.png", name: "Java", description: "We also did Java for a long time and I'm good at it too" },
        ],
    },
    {
        category: "Database",
        skills: [
            { image: "sql-logo.png", name: "SQL", description: "I can do the basics of SQL, but I have to learn everything else" },
            { image: "plsql-logo.png", name: "PL/SQL", description: "same as sql" },
        ],
    },
];
var container = document.querySelector('.skills');
skillCategories.forEach(function (category) {
    var categoryDiv = document.createElement('div');
    categoryDiv.classList.add('skill-category');
    categoryDiv.innerHTML = "<h3>".concat(category.category, "</h3>");
    var skillsDiv = document.createElement('div');
    skillsDiv.classList.add('skills-grid');
    category.skills.forEach(function (skill, index) {
        if (index > 0 && index % 3 === 0) {
            var rowBreak = document.createElement('div');
            rowBreak.classList.add('row-break');
            skillsDiv.appendChild(rowBreak);
        }
        var skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');
        skillDiv.innerHTML = "\n            <img src=\"pictures/".concat(skill.image, "\" alt=\"").concat(skill.name, "\">\n            <p>").concat(skill.name, "</p>\n            <span class=\"tooltip\">").concat(skill.description, "</span>\n        ");
        skillsDiv.appendChild(skillDiv);
    });
    categoryDiv.appendChild(skillsDiv);
    container.appendChild(categoryDiv);
});
