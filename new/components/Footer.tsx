import { ContactButtons } from "./ContactButtons";

export const Footer = () => {
    return (
        <div className="flex max-w-5xl mx-auto px-6 pt-6 pb-24 justify-between">
            <p className="w-1/2 text-secondary">
                Designed in{" "}
                <span className="text-primary font-medium">Figma</span> and
                coded in{" "}
                <span className="text-primary font-medium">
                    Visual Studio Code
                </span>
                . Built with{" "}
                <span className="text-primary font-medium">Next.js</span> and{" "}
                <span className="text-primary font-medium">Tailwind CSS.</span>{" "}
                Deployed with{" "}
                <span className="text-primary font-medium">Vercel</span>.
            </p>
            <ContactButtons />
        </div>
    );
};
