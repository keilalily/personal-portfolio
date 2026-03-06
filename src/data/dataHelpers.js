export const parseExperienceYears = (experiences) => {
    const now = new Date();
    let totalMonths = 0;

    experiences.forEach(exp => {
        const [startStr, endStr] = exp.year.split(" - ");
        const startDate = new Date(startStr);
        const endDate = endStr.toLowerCase() === "present" ? now : new Date(endStr);

        const months =
            (endDate.getFullYear() - startDate.getFullYear()) * 12 +
            (endDate.getMonth() - startDate.getMonth()) + 1;

        totalMonths += months;
    });

    return (totalMonths / 12).toFixed(1);
}

export const countUniqueClients = (experiences) => {
    return new Set(
        experiences.map(exp => exp.company)
    ).size;
}