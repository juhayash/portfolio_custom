import Image from "next/image";

import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Education } from "@/components/Education";

import profile from "@/public/profile.svg";

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
        <>
            <NavBar />
            <section id="intro" className="border-b border-primary">
                <div className="flex flex-col max-w-5xl mx-auto px-6 pt-44 py-24 gap-8">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-7xl font-medium">Jun Hayashida</h1>
                        <h2 className="text-3xl">Software Developer</h2>
                    </div>
                    <Image
                        src={profile}
                        alt="Jun Hayashida"
                        className="self-end"
                    ></Image>
                </div>
            </section>
            <section id="about" className="border-b border-primary">
                <div className="grid grid-cols-3 max-w-5xl mx-auto px-6 py-14 gap-4">
                    <div className="col-span-1 flex flex-col gap-1.5">
                        <p className="text-2xl">01</p>
                        <h3 className="text-3xl font-medium">About</h3>
                    </div>
                    <div className="col-span-2 flex flex-col gap-4">
                        <p className="leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <p className="leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <p className="leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </section>
            <section id="skills" className="border-b border-primary">
                <div className="grid grid-cols-3 max-w-5xl mx-auto px-6 py-14 gap-4">
                    <div className="col-span-1 flex flex-col gap-1.5">
                        <p className="text-2xl">02</p>
                        <h3 className="text-3xl font-medium">Skills</h3>
                    </div>
                    <div className="col-span-2 flex flex-col gap-4">
                        <p className="leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <p className="leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <p className="leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </section>
            <section id="education" className="border-b border-primary">
                <div className="grid grid-cols-3 max-w-5xl mx-auto px-6 py-14 gap-4">
                    <div className="col-span-1 flex flex-col gap-1.5">
                        <p className="text-2xl">03</p>
                        <h3 className="text-3xl font-medium">Education</h3>
                    </div>
                    <div className="col-span-2 flex flex-col gap-14">
                        {educationData.map((item, index) => (
                            <Education
                                key={index}
                                startDate={item.startDate}
                                endDate={item.endDate}
                                degree={item.degree}
                                institution={item.institution}
                                courses={item.courses.join(" • ")}
                            ></Education>
                        ))}
                    </div>
                </div>
            </section>
            <section id="projects" className="border-b border-primary">
                <div className="grid grid-cols-3 max-w-5xl mx-auto px-6 py-14 gap-4">
                    <div className="col-span-1 flex flex-col gap-1.5">
                        <p className="text-2xl">04</p>
                        <h3 className="text-3xl font-medium">Projects</h3>
                    </div>
                    <div className="col-span-2 flex flex-col gap-4">
                        <p className="leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <p className="leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <p className="leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
