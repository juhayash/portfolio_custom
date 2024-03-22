interface EducationProps {
    startDate: string;
    endDate: string;
    degree: string;
    institution: string;
    courses: string;
}

export const Education: React.FC<EducationProps> = ({
    startDate,
    endDate,
    degree,
    institution,
    courses,
}) => {
    return (
        <div className="grid grid-cols-7 gap-4">
            <div className="col-span-2 text-xs font-medium text-secondary uppercase">
                {startDate} — {endDate}
            </div>
            <div className="col-span-5 flex flex-col gap-8">
                <div className="flex flex-col gap-1.5">
                    <div className="font-medium">{degree}</div>
                    <div>{institution}</div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <div className="text-xs font-medium text-secondary uppercase">
                        major courses
                    </div>
                    <div className="text-sm text-secondary">{courses}</div>
                </div>
            </div>
        </div>
    );
};
