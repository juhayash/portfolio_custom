"use client";

import Image from "next/image";

import { IconButton } from "@/components/IconButton";

import profilepic from "../public/profilepicture.jpg";
import email from "../public/mail.svg";
import linkedin from "../public/linkedin.svg";
import github from "../public/github.svg";

const contactData = [
    {
        icon: email,
        alt: "envelope icon",
        link: "mailto:hayash.jun@gmail.com",
    },
    {
        icon: linkedin,
        alt: "linkedin icon",
        link: "https://www.linkedin.com/in/jun-hayashida-a34092244/",
    },
    {
        icon: github,
        alt: "github icon",
        link: "https://github.com/juhayash",
    },
];

interface SidebarButtonProps {
    label: string;
    onClick: () => void;
}

export const SidebarButton: React.FC<SidebarButtonProps> = ({
    label,
    onClick,
}) => {
    return (
        <button className="w-min p-1.5" onClick={onClick}>
            {label}
        </button>
    );
};

export const Sidebar = () => {
    const scrollToSection = (sectionId: string) => () => {
        const section = document.getElementById(sectionId);
        const offset = 56;
        if (section) {
            const sectionTop =
                section.getBoundingClientRect().top +
                window.pageYOffset -
                offset;
            window.scrollTo({
                top: sectionTop,
                behavior: "smooth",
            });
        }
    };

    const homeNav = [
        {
            label: "About",
            onClick: scrollToSection("about"),
        },
        {
            label: "Skills",
            onClick: scrollToSection("skills"),
        },
        {
            label: "Education",
            onClick: scrollToSection("education"),
        },
        {
            label: "Projects",
            onClick: scrollToSection("projects"),
        },
    ];

    return (
        <div className="flex flex-col w-2/5	max-h-screen py-16 justify-between sticky top-0">
            <div className="flex flex-col px-1.5 gap-8">
                <Image
                    className="w-40 h-40 object-cover rounded-lg"
                    src={profilepic}
                    alt="profile picture of Jun"
                    width={160}
                    height={160}
                />
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl font-bold">Jun Hayashida</h1>
                    <h2 className="text-xl font-medium">Software Developer</h2>
                    <p className="text-text-secondary">
                        Insert one line about yourself here.
                    </p>
                </div>
            </div>
            <nav className="flex flex-col gap-4">
                {homeNav.map((navItem, index) => (
                    <SidebarButton
                        key={index}
                        label={navItem.label}
                        onClick={navItem.onClick}
                    />
                ))}
            </nav>
            <div className="flex gap-8">
                {contactData.map((item, index) => (
                    <IconButton
                        key={index}
                        icon={item.icon}
                        alt={item.alt}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    );
};
