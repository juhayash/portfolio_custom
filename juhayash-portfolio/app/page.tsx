import { Sidebar } from "@/components/Sidebar";
import { Pill } from "@/components/Pill";

const skillsData = [
    {
        type: "Programming Languages",
        skills: ["Python", "C++", "C", "JavaScript", "Haskell"],
    },
    {
        type: "Widget Toolkits",
        skills: ["Flask", "Tkinter", "React", "React Native"],
    },
    {
        type: "Technical Skills",
        skills: ["Docker", "Git", "Linux", "Figma", "Notion"],
    },
    {
        type: "Methodologies",
        skills: ["Agile", "Scrum"],
    },
];

const educationData = [
    {
        startDate: "sep 2022",
        endDate: "dec 2023",
        degree: "Bachelor of Science in Computer Science",
        institution: "University of California, Santa Cruz",
        courses: [
            "Artificial Intelligence",
            "Game AI",
            "Distributed Systems",
            "Computer System Design",
            "Abstract Data Types",
            "Analysis of Algorithm",
            "Functional Programming",
        ],
    },
    {
        startDate: "sep 2022",
        endDate: "dec 2023",
        degree: "Additional Study",
        institution: "HarvardX / edX",
        courses: [
            "Intro to Computer Science",
            "Intro to Programming with Python",
            "Intro to Artificial Intelligence with Python",
        ],
    },
    {
        startDate: "sep 2019",
        endDate: "may 2022",
        degree: "Associate of Science in Computer Science",
        institution: "Diablo Valley College",
        courses: [
            "Advanced Programming with C and C++",
            "Program Design and Data Structure",
            "Object Oriented Programming",
        ],
    },
];

export default function Home() {
    return (
        <main className="container mx-auto px-16">
            <div className="flex justify-between gap-4">
                <Sidebar></Sidebar>
                <div className="flex flex-col w-3/5 py-16 gap-24">
                    <section id="about" className="flex flex-col gap-4">
                        <p className="text-sm font-medium tracking-widest uppercase text-text-secondary">
                            About
                        </p>
                        <p className="text-text-secondary">
                            Insert ~150 words about yourself here.
                        </p>
                    </section>
                    <section id="skills" className="flex flex-col gap-4">
                        <p className="text-sm font-medium tracking-widest uppercase text-text-secondary">
                            Skills
                        </p>
                        <div className="flex flex-col gap-8">
                            {skillsData.map((item, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-10 gap-4 items-center"
                                >
                                    <p className="col-span-3 text-sm text-text-secondary">
                                        {item.type}
                                    </p>
                                    <div className="col-span-7 flex gap-4">
                                        {item.skills.map((skill, index) => (
                                            <Pill
                                                key={index}
                                                label={skill}
                                            ></Pill>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section id="education" className="flex flex-col gap-4">
                        <p className="text-sm font-medium tracking-widest uppercase text-text-secondary">
                            Education
                        </p>
                        <div className="flex flex-col gap-16">
                            {educationData.map((item, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-10 gap-4"
                                >
                                    <p className="col-span-3 text-xs font-medium tracking-widest text-text-secondary uppercase">
                                        {item.startDate} — {item.endDate}
                                    </p>
                                    <div className="flex flex-col col-span-7 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <p className="font-medium">
                                                {item.degree}
                                            </p>
                                            <p className="text-text-secondary">
                                                {item.institution}
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-xs font-medium tracking-widest text-text-secondary uppercase">
                                                Main Courses
                                            </p>
                                            <p className="text-sm text-text-secondary">
                                                {item.courses.join(" • ")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section id="projects" className="flex flex-col gap-4">
                        <p className="text-sm font-medium tracking-widest uppercase text-text-secondary">
                            Projects
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
