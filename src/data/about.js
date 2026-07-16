const about = {
    //hero/home
    name: "oanh nguyen",
    title: "software developer",
    cvUrl: import.meta.env.BASE_URL + "CV_sample.pdf",

    // contact
    email: "oanhnguyen.ohn@outlook.com",

    socials: [
        { label: "GitHub", href:"https://github.com/oanhngy"},
        { label: "LinkedIn", href:"https://www.linkedin.com/in/ngyoanh/"},
    ],

    //aboutme
    statusBadge: "Open to Opportunities · HCM City",

    intro : "IT Graduate · Backend-First\nGrowing into Fullstack",

    bio: "A backend-focused developer soon graduating — available for full-time roles.\nI build systems with layered architecture, clean separation of concerns, and unit tests that catch real bugs — then refactor when the design isn't right yet. I work fast without cutting quality, using AI tools as structured collaborators to evaluate trade-offs and guide execution step by step.\nCurrently expanding into frontend to contribute across the full stack — and always looking for the next thing worth learning.",

    tools: [
        {skill: "ASP.NET Core"},
        {skill: "C#"},
        {skill: "React"},
        {skill: "MySQL"},
        {skill: "Claude Code"},
    ],
}

export default about