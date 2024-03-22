import { NavButton } from "@/components/NavButton";
import { ContactButtons } from "./ContactButtons";

export const NavBar = () => {
    return (
        <nav className="w-screen h-20 bg-background fixed border-b border-primary">
            <div className="flex max-w-5xl h-20 mx-auto px-6 justify-between items-center">
                <div className="flex gap-8">
                    <NavButton label="Home" link="/"></NavButton>
                    <NavButton label="Resume" link=""></NavButton>
                </div>
                <div className="flex gap-8">
                    <ContactButtons />
                </div>
            </div>
        </nav>
    );
};
