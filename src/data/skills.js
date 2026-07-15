const skills= [
    {
        id: "backend",
        iconUrl: import.meta.env.BASE_URL + "icons8-server-50.png",
        title: "ASP.NET Core · C# · MySQL",
        desc: "Builds layered backend systems with clean architecture - service layer, Repository pattern, JWT auth and unit tests using xUnit and Moq.",
    },
    {
        id: "frontend",
        iconUrl: import.meta.env.BASE_URL + "icons8-browser-50.png",
        title: "HTML · CSS · JavaScript · React",
        desc: "Building frontend skills with React and Vite - currently applying them in a real portfolio project with CSS Modules and a custom design system.",
    },
    {
        id: "ai-workflow",
        iconUrl: import.meta.env.BASE_URL + "icons8-robot-50.png",
        title: "Claude Code · Spec-driven",
        desc: "Uses AI tools as active collaborators throughout the dev cycle - architecture evaluation, iterative refactoring and structured spec files to guide execution step by step.",
    },
]

export default skills