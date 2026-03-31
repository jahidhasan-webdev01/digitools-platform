const SectionHeading = ({ title, subtitle }) => {
    return (
        <div className="space-y-1 text-center">
            <h1 className="font-extrabold text-3xl">{title}</h1>
            <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
    );
};

export default SectionHeading;