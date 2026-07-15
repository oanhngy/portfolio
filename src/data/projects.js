const projects = [
    {
        id: "project-1",
        title: "Personal Portfolio Website",
        img: import.meta.env.BASE_URL + "project-1.png",
        tech: ["HTML", "CSS", "JavaScript", "React", "Vite"],
        github: "https://github.com/oanhngy/portfolio",
    },
    {
        id: "project-2",
        title: "Bookstore API - Refactored Architecture",
        img: import.meta.env.BASE_URL + "project-2.jpg",
        tech: ["ASP.NET Core Web API", "C#", "MySQL", "xUnit", "Moq", "JWT"],
        github: "https://github.com/oanhngy/Web-Bookstore-API-Refactor-v1",
    },
    {
        id: "project-3",
        title: "Bookstore Web Application",
        img: import.meta.env.BASE_URL + "project-3.jpg",
        tech: ["ASP.NET Core MVC", "C#", "MySQL", "EF Core"],
        github: "https://github.com/oanhngy/Web-Bookstore",
    },
    {
        id: "project-4",
        title: "World Cup Simulation - Testing project",
        tech: ["Java", "JUnit", "Maven"],
        img: import.meta.env.BASE_URL + "project-4.webp",
        github: "https://github.com/oanhngy/Testing-WorldCup",
    },
]

export default projects