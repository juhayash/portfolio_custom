interface NavButtonProps {
    label: string;
    link: string;
}

export const NavButton: React.FC<NavButtonProps> = ({ label, link }) => {
    return (
        <a className="flex p-2.5" href={link}>
            {label}
        </a>
    );
};
