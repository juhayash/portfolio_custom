import { IconButton } from "@/components/IconButton";

import email from "@/public/email.svg";
import linkedin from "@/public/linkedin.svg";
import github from "@/public/github.svg";

const ContactData = [
    {
        icon: email,
        alt: "email icon",
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

export const ContactButtons = () => {
    return (
        <div className="flex gap-4">
            {ContactData.map((item, index) => (
                <IconButton
                    key={index}
                    icon={item.icon}
                    alt={item.alt}
                    link={item.link}
                ></IconButton>
            ))}
        </div>
    );
};
