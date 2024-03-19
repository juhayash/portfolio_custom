interface PillProps {
    label: string;
}

export const Pill: React.FC<PillProps> = ({ label }) => {
    return (
        <div className="flex px-2.5 py-1 bg-primary/20 rounded-full">
            <p className="text-sm text-primary font-medium m-0">{label}</p>
        </div>
    );
};
