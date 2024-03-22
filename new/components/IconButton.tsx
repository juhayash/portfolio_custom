import Image from "next/image";

interface IconButtonProps {
    icon: string;
    alt: string;
    link: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, alt, link }) => {
    return (
        <a className="flex p-2.5" href={link}>
            <Image src={icon} alt={alt} width={24} height={24}></Image>
        </a>
    );
};
