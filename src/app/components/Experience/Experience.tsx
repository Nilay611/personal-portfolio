export const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Capgemini Technology Services Ltd.",
      location: "Noida, India",
      type: "Full Time",
      period: "June 2022 - November 2024",
      experience: "2 years 6 months",
    },
    {
      title: "Trainee",
      company: "Capgemini Technology Services Ltd.",
      location: "Lucknow, India",
      type: "Part Time",
      period: "March 2022 - May 2024",
      experience: "3 months",
    },
    {
      title: "Virtual Intern",
      company: "Samsung Electronics Co. Ltd.",
      location: "Lucknow, India",
      type: "Part Time",
      period: "September 2021 - March 2022",
      experience: "7 months",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full px-8 py-16 flex flex-col justify-center align-center"
    >
      <div className="inline-block w-fit bg-primary px-6 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(75,75,75,1)]">
        <h2 className="text-2xl font-bold text-bold font-navbar">
          //Experience...
        </h2>
      </div>

      <div className="mt-12 space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 border-l-4 border-black font-navbar"
          >
            <div className="absolute -left-[10px] top-2 w-4 h-4 bg-primary border-2 border-black rounded-full"></div>
            <div className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(75,75,75,1)] rounded-none">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <span className="text-sm bg-primary text-white px-3 py-1 rounded-md">
                  {exp.period}
                </span>
              </div>

              <div className="text-lg font-semibold">{exp.title}</div>

              <div className="flex items-center gap-4 mt-2 text-gray-600">
                <span>{exp.location}</span>
                <span>•</span>
                <span>{exp.type}</span>
                <span>•</span>
                <span>{exp.experience}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
