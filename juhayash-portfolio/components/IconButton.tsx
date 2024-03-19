import Image from "next/image";

interface IconButtonProps {
    icon: string;
    alt: string;
    link: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, alt, link }) => {
    return (
        <a className="flex p-1.5 justify-center items-center" href={link}>
            <Image src={icon} alt={alt}></Image>
        </a>
    );
};
