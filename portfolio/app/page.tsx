import Image from "next/image";
import Profile from "../public/profilepicture.jpg";
import React from "react";

interface EducationProps {
    startDate: string;
    endDate: string;
    degree: string;
    institution: string;
    courses: string[];
}

interface SkillProps {
    skill: string;
}

const Education: React.FC<EducationProps> = ({
    startDate,
    endDate,
    degree,
    institution,
    courses,
}) => {
    const coursesList = courses.join(" • ");

    return (
        <div className="hflex gap-30">
            <div className="desc">
                {startDate} — {endDate}
            </div>
            <div className="vflex gap-30">
                <div className="vflex gap-15">
                    <p className="semi-bold">{degree}</p>
                    <p className="text-secondary">{institution}</p>
                </div>
                <div className="vflex gap-15">
                    <div className="desc">main courses</div>
                    <div className="p-small">{coursesList}</div>
                </div>
            </div>
        </div>
    );
};

const SkillPill: React.FC<SkillProps> = ({ skill }) => {
    return <div className="pill p-small semi-bold primary-color">{skill}</div>;
};

export default function Home() {
    return (
        <main>
            <div className="sidebar">
                <div className="vflex gap-30">
                    <Image
                        className="profile"
                        src={Profile}
                        alt="Profile Picture"
                    />
                    <div className="vflex gap-15">
                        <h1>Jun Hayashida</h1>
                        <h2 className="position">Software Developer</h2>
                        <p className="text-secondary">
                            Insert one line about yourself here.
                        </p>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="vflex gap-30 home-section">
                    <div className="section-heading">About</div>
                    <p className="text-secondary">
                        Insert ~150 words about yourself here.
                    </p>
                </div>
                {/* SKILLS */}
                <div className="vflex gap-30 home-section">
                    <div className="section-heading">Skills</div>
                    <div className="hflex gap-30 align-center">
                        <p className="text-secondary">Programming Languages</p>
                        <div className="hflex gap-15">
                            <SkillPill skill="Python"></SkillPill>
                            <SkillPill skill="C++"></SkillPill>
                            <SkillPill skill="C"></SkillPill>
                            <SkillPill skill="JavaScript"></SkillPill>
                            <SkillPill skill="Haskell"></SkillPill>
                        </div>
                    </div>
                    <div className="hflex gap-30 align-center">
                        <p className="text-secondary">Widget Toolkits</p>
                        <div className="hflex gap-15">
                            <SkillPill skill="Flask"></SkillPill>
                            <SkillPill skill="Tkinter"></SkillPill>
                            <SkillPill skill="React"></SkillPill>
                            <SkillPill skill="ReactNative"></SkillPill>
                        </div>
                    </div>
                    <div className="hflex gap-30 align-center">
                        <p className="text-secondary">Technical Skills</p>
                        <div className="hflex gap-15">
                            <SkillPill skill="Docker"></SkillPill>
                            <SkillPill skill="Git"></SkillPill>
                            <SkillPill skill="Linux"></SkillPill>
                            <SkillPill skill="Figma"></SkillPill>
                            <SkillPill skill="Notion"></SkillPill>
                        </div>
                    </div>
                    <div className="hflex gap-30 align-center">
                        <p className="text-secondary">Methodologies</p>
                        <div className="hflex gap-15">
                            <SkillPill skill="Agile"></SkillPill>
                            <SkillPill skill="Scrum"></SkillPill>
                        </div>
                    </div>
                </div>
                {/* EDUCATION */}
                <div className="vflex gap-30 home-section">
                    <div className="section-heading">Education</div>
                    <div className="vflex gap-60">
                        <Education
                            startDate="sep 2022"
                            endDate="dec 2023"
                            degree="Bachelor of Science in Computer Science"
                            institution="University of California, Santa Cruz"
                            courses={[
                                "Artificial Intelligence",
                                "Game AI",
                                "Distributed Systems",
                                "Computer System Design",
                                "Abstract Data Types",
                                "Analysis of Algorithm",
                                "Functional Programming",
                            ]}
                        ></Education>
                        <Education
                            startDate="sep 2022"
                            endDate="dec 2023"
                            degree="Additional Study"
                            institution="HarvardX / edX"
                            courses={[
                                "Intro to Computer Science",
                                "Intro to Programming with Python",
                                "Intro to Artificial Intelligence with Python",
                            ]}
                        ></Education>
                        <Education
                            startDate="sep 2019"
                            endDate="may 2022"
                            degree="Associate of Science in Computer Science"
                            institution="Diablo Valley College"
                            courses={[
                                "Advanced Programming with C and C++",
                                "Program Design and Data Structure",
                                "Object Oriented Programming",
                            ]}
                        ></Education>
                    </div>
                </div>
                <div className="vflex gap-30 home-section">
                    <div className="section-heading">Projects</div>
                    <p className="text-secondary">
                        Insert ~150 words about yourself here.
                    </p>
                </div>
            </div>
        </main>
    );
}
